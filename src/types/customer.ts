export interface CustomerAddress {
  firstName: string;

  lastName: string;

  company?: string;

  address1: string;

  address2?: string;

  city: string;

  state: string;

  postcode: string;

  country: string;

  email?: string;

  phone?: string;
}

export interface UpdateBillingAddressRequest extends CustomerAddress {}

export interface UpdateShippingAddressRequest extends CustomerAddress {}
export interface Customer {
  id: number;

  email: string;

  username: string;

  firstName: string;

  lastName: string;

  displayName: string;

  role: string;

  avatar?: string;

  phone?: string;

  billing: CustomerAddress;

  shipping: CustomerAddress;

  createdAt: string;

  updatedAt: string;
}

export interface CustomerResponse {
  customer: Customer;
}

export interface UpdateProfileRequest {
  firstName: string;

  lastName: string;

  displayName: string;

  email: string;

  phone?: string;
}

export interface DashboardSummary {
  orders: number;

  completedOrders: number;

  processingOrders: number;

  wishlistItems: number;

  reviews: number;
}

export interface DashboardResponse {
  summary: DashboardSummary;
}
