import { API } from "@/libs/api/endpoints";
import { wooCommerceClient } from "@/libs/woocommerce/client";
import {
  CheckoutRequest,
  CheckoutResponse,
  PaymentGateway,
} from "@/types/checkout";

class CheckoutService {
  async getPaymentMethods(): Promise<PaymentGateway[]> {
    return wooCommerceClient.get<PaymentGateway[]>(
      API.CHECKOUT_PAYMENT_GATEWAYS,
    );
  }

  async checkout(body: CheckoutRequest): Promise<CheckoutResponse> {
    return wooCommerceClient.post<CheckoutResponse>(API.CHECKOUT, body);
  }
}

export const checkoutService = new CheckoutService();
