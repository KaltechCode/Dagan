import { executeQuery } from "@/libs/api/helper";
import { baseApi } from "./baseApi";
import { categoryService } from "@/services/categories.services";
import { Category } from "@/types/product";
import { Collection } from "@/types/api";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Collection<Category>, void>({
      queryFn() {
        return executeQuery(() => categoryService.getCategories());
      },

      providesTags: ["Categories"],
    }),

    getCategory: builder.query<Category, string>({
      queryFn(slug) {
        return executeQuery(() => categoryService.getCategory(slug));
      },

      providesTags: (_, __, slug) => [
        {
          type: "Categories",
          id: slug,
        },
      ],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = categoryApi;
