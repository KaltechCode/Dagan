import { tokenService } from "@/services/token.services";

export interface RequestOptions {
  params?: Record<string, unknown>;
  body?: unknown;
}

function buildUrl(endpoint: string, params?: Record<string, unknown>) {
  const normalizedEndpoint = endpoint.replace(/^\/+/, "");

  if (typeof window === "undefined") {
    const baseUrl = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

    if (!baseUrl) {
      throw new Error("WORDPRESS_API_URL is not configured");
    }

    const url = new URL(`${baseUrl}/${normalizedEndpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.set(key, String(value));
        }
      });
    }

    return url;
  }

  const origin =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3000";

  const url = new URL(`/api/${normalizedEndpoint}`, origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url;
}

async function refreshAccessToken(): Promise<boolean> {
  const refreshToken = tokenService.getRefreshToken();

  if (!refreshToken) {
    return false;
  }

  try {
    const response = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      tokenService.clearTokens();
      return false;
    }

    const result = await response.json();

    tokenService.setTokens(result.data.access_token, result.data.refresh_token);

    return true;
  } catch {
    tokenService.clearTokens();
    return false;
  }
}

// export async function request<T>(
//   method: string,
//   endpoint: string,
//   options?: RequestOptions,
// ): Promise<T> {
//   const url = buildUrl(endpoint, options?.params);

//   const accessToken = tokenService.getAccessToken();

//   const response = await fetch(buildUrl(endpoint, options?.params), {
//     method,
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       if(accessToken) {
//         headers["Authorization"] = `Bearer ${accessToken}`;
//       },
//     },
//     body: options?.body ? JSON.stringify(options.body) : undefined,
//     cache: "no-store",
//   });

export async function request<T>(
  method: string,
  endpoint: string,
  options?: RequestOptions,
): Promise<T> {
  const url = buildUrl(endpoint, options?.params);

  const accessToken = tokenService.getAccessToken();

  const headers: HeadersInit = {};

  const isFormData = options?.body instanceof FormData;

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  let response = await fetch(url, {
    method,
    credentials: "include",
    headers,
    body: options?.body
      ? isFormData
        ? (options.body as BodyInit)
        : JSON.stringify(options.body)
      : undefined,
    cache: "no-store",
  });

  if (response.status === 401) {
    const refreshed = await refreshAccessToken();

    if (refreshed) {
      response = await response.json();
    }
  }
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  const payload = await response.json();

  if (
    typeof payload === "object" &&
    payload !== null &&
    "success" in payload &&
    "data" in payload
  ) {
    return payload.data as T;
  }

  return payload as T;
}
