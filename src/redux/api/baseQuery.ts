export interface ApiError {
  status: number | string;

  message: string;

  errors?: unknown;
}

// import { wooCommerceClient } from "@/libs/woocommerce/client";

// import { BaseQueryFn } from "@reduxjs/toolkit/query";

// export interface BaseQueryArgs {
//   url: string;

//   method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

//   body?: unknown;

//   params?: object;
// }

// export const baseQuery: BaseQueryFn<BaseQueryArgs, unknown, ApiError> = async ({
//   url,
//   method = "GET",
//   body,
//   params,
// }) => {
//   try {
//     let data: unknown;

//     switch (method) {
//       case "GET":
//         data = await wooCommerceClient.get(
//           url,
//           params as Record<string, unknown>,
//         );
//         break;

//       case "POST":
//         data = await wooCommerceClient.post(url, body);
//         break;

//       case "PUT":
//         data = await wooCommerceClient.put(url, body);
//         break;

//       case "PATCH":
//         data = await wooCommerceClient.patch(url, body);
//         break;

//       case "DELETE":
//         data = await wooCommerceClient.delete(url);
//         break;
//     }

//     return {
//       data,
//     };
//   } catch (error) {
//     return {
//       error: {
//         status: "CUSTOM_ERROR",
//         message: error instanceof Error ? error.message : "Unknown error",
//       },
//     };
//   }
// };

import { wooCommerceClient } from "@/libs/woocommerce/client";
import { BaseQueryFn } from "@reduxjs/toolkit/query";

export interface BaseQueryArgs {
  url: string;

  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

  body?: unknown;

  params?: object;
}

export const baseQuery: BaseQueryFn<BaseQueryArgs, unknown, ApiError> = async ({
  url,
  method = "GET",
  body,
  params,
}) => {
  try {
    let data: unknown;

    switch (method) {
      case "GET":
        data = await wooCommerceClient.get(
          url,
          params as Record<string, unknown>,
        );
        break;

      case "POST":
        data = await wooCommerceClient.post(url, body);
        break;

      case "PUT":
        data = await wooCommerceClient.put(url, body);
        break;

      case "PATCH":
        data = await wooCommerceClient.patch(url, body);
        break;

      case "DELETE":
        data = await wooCommerceClient.delete(url);
        break;
    }

    return {
      data,
    };
  } catch (error) {
    return {
      error: {
        status: "CUSTOM_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
  }
};
