import { API } from "@/libs/api/endpoints";
import type {
  CustomerResponse,
  DashboardResponse,
  UpdateBillingAddressRequest,
  UpdateProfileRequest,
  UpdateShippingAddressRequest,
} from "../../types/customer";
import { baseApi } from "./baseApi";

export const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Customer
     */

    getCustomer: builder.query<CustomerResponse, void>({
      query: () => ({
        url: API.CUSTOMER,
      }),

      providesTags: ["Customer"],
    }),

    /**
     * Dashboard
     */

    getDashboard: builder.query<DashboardResponse, void>({
      query: () => ({
        url: `${API.CUSTOMER}/dashboard`,
      }),

      providesTags: ["Customer"],
    }),

    /**
     * Update Profile
     */

    updateProfile: builder.mutation<CustomerResponse, UpdateProfileRequest>({
      query: (body) => ({
        url: API.CUSTOMER_PROFILE,

        method: "PUT",

        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    /**
     * Billing Address
     */

    updateBilling: builder.mutation<
      CustomerResponse,
      UpdateBillingAddressRequest
    >({
      query: (body) => ({
        url: API.CUSTOMER_BILLING,

        method: "PUT",

        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    /**
     * Shipping Address
     */

    updateShipping: builder.mutation<
      CustomerResponse,
      UpdateShippingAddressRequest
    >({
      query: (body) => ({
        url: API.CUSTOMER_SHIPPING,

        method: "PUT",

        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    /**
     * Upload Avatar
     */

    uploadAvatar: builder.mutation<CustomerResponse, FormData>({
      query: (body) => ({
        url: API.CUSTOMER_AVATAR,

        method: "POST",

        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    /**
     * Delete Avatar
     */

    deleteAvatar: builder.mutation<CustomerResponse, void>({
      query: () => ({
        url: API.CUSTOMER_AVATAR,

        method: "DELETE",
      }),

      invalidatesTags: ["Customer"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetCustomerQuery,

  useLazyGetCustomerQuery,

  useGetDashboardQuery,

  useUpdateProfileMutation,

  useUpdateBillingMutation,

  useUpdateShippingMutation,

  useUploadAvatarMutation,

  useDeleteAvatarMutation,
} = customerApi;
