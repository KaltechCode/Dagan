// // lib/wordpress/client.ts

// class WordPressClient {
//   private baseUrl = process.env.WORDPRESS_URL!;

//   async post<T>(endpoint: string, body: unknown): Promise<T> {
//     const response = await fetch(`${this.baseUrl}${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error("Authentication failed.");
//     }

//     return response.json();
//   }

//   async get<T>(endpoint: string, token?: string): Promise<T> {
//     const response = await fetch(`${this.baseUrl}${endpoint}`, {
//       headers: token
//         ? {
//             Authorization: `Bearer ${token}`,
//           }
//         : {},
//     });

//     if (!response.ok) {
//       throw new Error("Request failed.");
//     }

//     return response.json();
//   }
// }

// export const wpClient = new WordPressClient();

import { cookies, headers } from "next/headers";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

class WordPressProxyClient {
  private readonly baseUrl = process.env.WORDPRESS_URL!;

  private async request<T>(
    method: HttpMethod,
    endpoint: string,
    body?: unknown,
  ) {
    const cookieStore = await cookies();

    const requestHeaders = await headers();

    const cookie = cookieStore
      .getAll()
      .map(({ name, value }) => `${name}=${value}`)
      .join("; ");

    const authorization = requestHeaders.get("authorization");

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,

      headers: {
        "Content-Type": "application/json",

        ...(cookie
          ? {
              Cookie: cookie,
            }
          : {}),

        ...(authorization
          ? {
              Authorization: authorization,
            }
          : {}),
      },

      body: body === undefined ? undefined : JSON.stringify(body),

      cache: "no-store",
    });

    const data = await response.json();

    return {
      response,
      data,
    };
  }

  get<T>(endpoint: string) {
    return this.request<T>("GET", endpoint);
  }

  post<T>(endpoint: string, body: unknown) {
    return this.request<T>("POST", endpoint, body);
  }

  patch<T>(endpoint: string, body: unknown) {
    return this.request<T>("PATCH", endpoint, body);
  }

  put<T>(endpoint: string, body: unknown) {
    return this.request<T>("PUT", endpoint, body);
  }

  delete<T>(endpoint: string) {
    return this.request<T>("DELETE", endpoint);
  }
}

export const wpClient = new WordPressProxyClient();
