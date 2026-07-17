import { OrderStatus, StatusDefinition } from "@/types/order";

export const ORDER_STATUS: Record<OrderStatus, StatusDefinition> = {
  pending: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-800",
  },

  processing: {
    label: "Processing",
    className: "bg-blue-100 text-blue-800",
  },

  completed: {
    label: "Completed",
    className: "bg-green-100 text-green-800",
  },

  cancelled: {
    label: "Cancelled",
    className: "bg-gray-200 text-gray-700",
  },

  failed: {
    label: "Failed",
    className: "bg-red-100 text-red-700",
  },

  refunded: {
    label: "Refunded",
    className: "bg-purple-100 text-purple-800",
  },

  "on-hold": {
    label: "On Hold",
    className: "bg-orange-100 text-orange-800",
  },
};

export const SORT_OPTIONS = [
  {
    label: "Default",
    value: "menu_order",
  },
  {
    label: "Newest",
    value: "date",
  },
  {
    label: "Popularity",
    value: "popularity",
  },
  {
    label: "Average Rating",
    value: "rating",
  },
  {
    label: "Price: Low to High",
    value: "price",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
  },
];
