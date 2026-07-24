import { NextRequest } from "next/server";

import { forwardToWordPress } from "@/libs/forwardToWordPress";

export async function POST(request: NextRequest) {
  return forwardToWordPress(request, ["customer", "avatar"]);
}
