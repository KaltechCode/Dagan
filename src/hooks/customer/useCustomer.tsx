"use client";

import { useCallback } from "react";

import {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateBillingMutation,
  useUpdateShippingMutation,
  useUploadAvatarMutation,
} from "@/redux/api/customerApi";

import type {
  UpdateBillingRequest,
  UpdateProfileRequest,
  UpdateShippingRequest,
} from "@/types/customer";

export function useCustomer() {
  const {
    data: customer,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetProfileQuery();

  const [updateProfileMutation] = useUpdateProfileMutation();

  const [updateBillingMutation] = useUpdateBillingMutation();

  const [updateShippingMutation] = useUpdateShippingMutation();

  const [uploadAvatarMutation] = useUploadAvatarMutation();

  const updateProfile = useCallback(
    async (payload: UpdateProfileRequest) => {
      return updateProfileMutation(payload).unwrap();
    },
    [updateProfileMutation],
  );

  const updateBilling = useCallback(
    async (payload: UpdateBillingRequest) => {
      return updateBillingMutation(payload).unwrap();
    },
    [updateBillingMutation],
  );

  const updateShipping = useCallback(
    async (payload: UpdateShippingRequest) => {
      return updateShippingMutation(payload).unwrap();
    },
    [updateShippingMutation],
  );

  const uploadAvatar = useCallback(
    async (file: File) => {
      return uploadAvatarMutation({
        avatar: file,
      }).unwrap();
    },
    [uploadAvatarMutation],
  );

  return {
    customer,

    isLoading,
    isFetching,
    error,

    refetch,

    updateProfile,
    updateBilling,
    updateShipping,
    uploadAvatar,
  };
}
