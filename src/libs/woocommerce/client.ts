import { request } from "../request";

export class WooCommerceClient {
  get<T>(endpoint: string, params?: Record<string, unknown>) {
    return request<T>("GET", endpoint, {
      params,
    });
  }

  post<T>(endpoint: string, body?: unknown) {
    return request<T>("POST", endpoint, {
      body,
    });
  }

  put<T>(endpoint: string, body?: unknown) {
    return request<T>("PUT", endpoint, {
      body,
    });
  }

  patch<T>(endpoint: string, body?: unknown) {
    return request<T>("PATCH", endpoint, {
      body,
    });
  }

  delete<T>(endpoint: string) {
    return request<T>("DELETE", endpoint);
  }
}

export const wooCommerceClient = new WooCommerceClient();
