import { forwardToWordPress } from "@/libs/forwardToWordPress";
import { NextRequest } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

/**
 * GET /api/orders/:id
 * Get a single order.
 */
export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  return forwardToWordPress(request, [`/orders/${id}`]);
}

/**
 * POST /api/orders/:id/cancel
 * Cancel an order.
 *
 * Optional depending on your API design.
 */
export async function POST(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  return forwardToWordPress(request, [`/orders/${id}`]);
}
