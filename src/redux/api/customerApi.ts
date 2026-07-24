import { customerService } from "@/services/customer.services";

import type {
  Customer,
  UpdateBillingRequest,
  UpdateProfileRequest,
  UpdateShippingRequest,
  UploadAvatarRequest,
} from "@/types/customer";
import { executeQuery } from "@/libs/api/helper";
import { baseApi } from "./baseApi";

export const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Current authenticated customer
     */
    getProfile: builder.query<Customer, void>({
      queryFn: () => executeQuery(() => customerService.profile()),

      providesTags: ["Customer"],
    }),

    /**
     * Update profile
     */
    updateProfile: builder.mutation<Customer, UpdateProfileRequest>({
      queryFn: (body) =>
        executeQuery(() => customerService.updateProfile(body)),

      invalidatesTags: (_result, _error) => ["Customer"],
    }),

    /**
     * Update billing address
     */
    updateBilling: builder.mutation<Customer, UpdateBillingRequest>({
      queryFn: (body) =>
        executeQuery(() => customerService.updateBilling(body)),

      invalidatesTags: (_result, _error) => ["Customer"],
    }),

    /**
     * Update shipping address
     */
    updateShipping: builder.mutation<Customer, UpdateShippingRequest>({
      queryFn: (body) =>
        executeQuery(() => customerService.updateShipping(body)),

      invalidatesTags: (_result, _error) => ["Customer"],
    }),

    /**
     * Upload avatar
     */
    uploadAvatar: builder.mutation<Customer, UploadAvatarRequest>({
      queryFn: (body) =>
        executeQuery(() => customerService.uploadAvatar(body.avatar)),

      invalidatesTags: (_result, _error) => ["Customer"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,

  useUpdateProfileMutation,
  useUpdateBillingMutation,
  useUpdateShippingMutation,
  useUploadAvatarMutation,
} = customerApi;
