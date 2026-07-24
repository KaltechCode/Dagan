export interface CustomerAddress {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email?: string;
  phone?: string;
}

export interface Customer {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  display_name: string;
  role: string;
  avatar: string;
  billing: CustomerAddress;
  shipping: CustomerAddress;
  created_at: string | null;
}

export interface UpdateBillingRequest {
  first_name: string;
  last_name: string;
  company?: string;
  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

export interface UpdateShippingRequest {
  first_name: string;
  last_name: string;
  company?: string;
  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface UpdateProfileRequest {
  first_name: string;
  last_name: string;
  display_name: string;
  email: string;
}

export interface UploadAvatarRequest {
  avatar: File;
}
