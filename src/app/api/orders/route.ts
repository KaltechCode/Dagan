import { forwardToWordPress } from "@/libs/forwardToWordPress";
import { NextRequest } from "next/server";

const ENDPOINT = "/orders";

/**
 * GET /api/orders
 * Get authenticated customer's orders.
 */
export async function GET(request: NextRequest) {
  return forwardToWordPress(request, ["/orders"]);
}
