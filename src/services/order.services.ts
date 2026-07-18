import { API } from "@/libs/api/endpoints";
import { wooCommerceClient } from "@/libs/woocommerce/client";

import type {
  OrderNote,
  OrderQuery,
  OrderResponse,
  OrdersResponse,
} from "@/types/order";

class OrderService {
  async getOrders(query?: OrderQuery): Promise<OrdersResponse> {
    return wooCommerceClient.get<OrdersResponse>(
      API.ORDERS,
      query as Record<string, unknown>,
    );
  }

  async getOrder(id: number): Promise<OrderResponse> {
    return wooCommerceClient.get<OrderResponse>(`${API.ORDER}/${id}`);
  }

  async cancelOrder(id: number): Promise<OrderResponse> {
    return wooCommerceClient.post<OrderResponse>(`${API.ORDER}/${id}/cancel`);
  }

  async payOrder(id: number): Promise<{ paymentUrl: string }> {
    return wooCommerceClient.post(`${API.ORDER}/${id}/pay`);
  }

  async getOrderNotes(id: number): Promise<OrderNote[]> {
    return wooCommerceClient.get<OrderNote[]>(`${API.ORDER}/${id}/notes`);
  }
}

export const orderService = new OrderService();
