import { wooCommerceClient } from "../libs/woocommerce/client";

export abstract class BaseService {
  protected get<T>(endpoint: string, params?: Record<string, unknown>) {
    return wooCommerceClient.get<T>(endpoint, params);
  }

  protected post<T>(endpoint: string, body: unknown) {
    return wooCommerceClient.post<T>(endpoint, body);
  }

  protected put<T>(endpoint: string, body: unknown) {
    return wooCommerceClient.put<T>(endpoint, body);
  }

  protected delete<T>(endpoint: string, params?: Record<string, unknown>) {
    return wooCommerceClient.delete<T>(endpoint, params);
  }
}
