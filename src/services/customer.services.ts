import type {
  Customer,
  UpdateBillingRequest,
  UpdateProfileRequest,
  UpdateShippingRequest,
} from "@/types/customer";
import { wooCommerceClient } from "../libs/woocommerce/client";

class CustomerService {
  /**
   * Get authenticated customer profile
   */
  async profile(): Promise<Customer> {
    return wooCommerceClient.get<Customer>("/customer/profile");
  }

  /**
   * Update customer profile
   */
  async updateProfile(body: UpdateProfileRequest): Promise<Customer> {
    return wooCommerceClient.put<Customer>("/customer/profile", body);
  }

  /**
   * Update billing address
   */
  async updateBilling(body: UpdateBillingRequest): Promise<Customer> {
    return wooCommerceClient.put<Customer>("/customer/billing", body);
  }

  /**
   * Update shipping address
   */
  async updateShipping(body: UpdateShippingRequest): Promise<Customer> {
    return wooCommerceClient.put<Customer>("/customer/shipping", body);
  }

  /**
   * Upload customer avatar
   */
  async uploadAvatar(file: File): Promise<Customer> {
    const formData = new FormData();

    formData.append("avatar", file);

    return wooCommerceClient.post<Customer>("/customer/avatar", formData);
  }
}

export const customerService = new CustomerService();
