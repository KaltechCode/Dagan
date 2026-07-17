type RequestOptions = {
  params?: Record<string, unknown>;
  body?: unknown;
};

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

export async function request<T>(
  method: string,
  endpoint: string,
  options?: RequestOptions,
): Promise<T> {
  const response = await fetch(buildUrl(endpoint, options?.params), {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
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
