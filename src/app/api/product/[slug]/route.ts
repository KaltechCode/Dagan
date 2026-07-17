import { NextRequest } from "next/server";
import { forwardToWordPress } from "@/libs/forwardToWordPress";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  return forwardToWordPress(request, ["product", slug]);
}
