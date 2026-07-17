// import { AddToCartRequest, Cart } from "@/types/cart";
// import { wooCommerceClient } from "../libs/woocommerce/client";
// import { API } from "@/libs/api/endpoints";

// class CartService {
//   getCart() {
//     return wooCommerceClient.get<Cart>(API.CART);
//   }

//   addItem(body: AddToCartRequest) {
//     return wooCommerceClient.post<Cart>(API.CART_ITEMS, body);
//   }

//   updateItem(key: string, quantity: number) {
//     return wooCommerceClient.patch<Cart>(`${API.CART_ITEMS}/${key}`, {
//       quantity,
//     });
//   }

//   removeItem(key: string) {
//     return wooCommerceClient.delete<Cart>(`${API.CART_ITEMS}/${key}`);
//   }

//   applyCoupon(code: string) {
//     return wooCommerceClient.post<Cart>(API.CART_COUPONS, { code });
//   }

//   removeCoupon(code: string) {
//     return wooCommerceClient.delete<Cart>(`${API.CART_COUPONS}/${code}`);
//   }

//   selectShipping(methods: string[]) {
//     return wooCommerceClient.post<Cart>(API.CART_SHIPPING, { methods });
//   }
// }

// export const cartService = new CartService();

import {
  AddCartItemRequest,
  ApplyCouponRequest,
  Cart,
  ShippingMethodRequest,
  UpdateCartItemRequest,
} from "@/types/cart";
import { wooCommerceClient } from "@/libs/woocommerce/client";
import { API } from "@/libs/api/endpoints";

class CartService {
  async getCart(): Promise<Cart> {
    return wooCommerceClient.get<Cart>(API.CART);
  }

  async addItem(body: AddCartItemRequest): Promise<Cart> {
    return wooCommerceClient.post<Cart>(API.CART_ITEMS, body);
  }

  async updateItem({ key, quantity }: UpdateCartItemRequest): Promise<Cart> {
    return wooCommerceClient.patch<Cart>(`${API.CART_ITEMS}/${key}`, {
      quantity,
    });
  }

  async removeItem(key: string): Promise<Cart> {
    return wooCommerceClient.delete<Cart>(`${API.CART_ITEMS}/${key}`);
  }

  async applyCoupon({ code }: ApplyCouponRequest): Promise<Cart> {
    return wooCommerceClient.post<Cart>(API.CART_COUPONS, {
      code,
    });
  }

  async removeCoupon(code: string): Promise<Cart> {
    return wooCommerceClient.delete<Cart>(`${API.CART_COUPONS}/${code}`);
  }

  async updateShipping(body: ShippingMethodRequest): Promise<Cart> {
    return wooCommerceClient.post<Cart>(API.CART_SHIPPING, body);
  }
}

export const cartService = new CartService();
