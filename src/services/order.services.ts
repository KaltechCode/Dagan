import { API_ENDPOINTS } from "@/constants/endpoints";
import { BaseService } from "./base.services";

class OrderService extends BaseService {
  getOrders() {
    return this.get(API_ENDPOINTS.ORDERS);
  }

  getOrder(id: number) {
    return this.get(API_ENDPOINTS.ORDER(id));
  }

  createOrder(body: any) {
    return this.post(API_ENDPOINTS.ORDERS, body);
  }
}
