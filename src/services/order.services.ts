import type { Order } from "@/types/order";
import { wooCommerceClient } from "@/libs/woocommerce/client";

class OrderService {
  /**
   * Get authenticated customer's orders
   */
  async getOrders(): Promise<Order[]> {
    return wooCommerceClient.get<Order[]>("/orders");
  }

  /**
   * Get a single order
   */
  async getOrder(id: number | string): Promise<Order> {
    return wooCommerceClient.get<Order>(`/orders/${id}`);
  }

  /**
   * Cancel an order
   */
  async cancelOrder(id: number | string): Promise<Order> {
    return wooCommerceClient.post<Order>(`/orders/${id}`, {});
  }
}

export const orderService = new OrderService();
