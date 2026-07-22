import { API } from "@/libs/api/endpoints";

import { Product } from "@/types/product";

import { baseApi } from "./baseApi";

import type { Collection, ProductQuery } from "../types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Collection<Product>, ProductQuery | void>({
      query: (query) => {
        console.log("RTK Query:", query);
        return {
          url: API.PRODUCTS,
          params: query ?? {},
        };
      },

      providesTags: (result) =>
        result
          ? [
              ...result.items.map((product) => ({
                type: "Products" as const,
                id: product.id,
              })),

              {
                type: "Products",
                id: "LIST",
              },
            ]
          : [
              {
                type: "Products",
                id: "LIST",
              },
            ],
    }),

    getProduct: builder.query<Product, string>({
      query: (slug) => ({
        url: `${API.PRODUCTS}/${slug}`,
      }),

      providesTags: (result) =>
        result
          ? [
              {
                type: "Products",
                id: result.id,
              },
            ]
          : [],
    }),

    getFeaturedProducts: builder.query<Product[], void>({
      query: () => ({
        url: API.PRODUCTS,

        params: {
          featured: true,
        },
      }),

      providesTags: [
        {
          type: "Products",
          id: "FEATURED",
        },
      ],
    }),

    getRelatedProducts: builder.query<Product[], string>({
      query: (slug) => ({
        url: `${API.PRODUCTS}/${slug}/related`,
      }),

      providesTags: (result, error, slug) => [
        {
          type: "Products",
          id: `RELATED-${slug}`,
        },
      ],
    }),

    getProductBySlug: builder.query<Product, string>({
      query: (slug) => ({
        url: API.PRODUCTS,
        params: {
          slug,
        },
      }),

      transformResponse: (response: Collection<Product>) => {
        if (!response.items.length) {
          throw new Error("Product not found");
        }

        return response.items[0];
      },

      providesTags: (result) =>
        result
          ? [
              {
                type: "Products",
                id: result.id,
              },
            ]
          : [],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetProductsQuery,

  useLazyGetProductsQuery,

  useGetProductQuery,

  useLazyGetProductQuery,

  useGetFeaturedProductsQuery,

  useGetRelatedProductsQuery,

  useGetProductBySlugQuery,
} = productApi;
