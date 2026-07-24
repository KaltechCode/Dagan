import { NextRequest } from "next/server";

import { forwardToWordPress } from "@/libs/forwardToWordPress";

export async function PUT(request: NextRequest) {
  return forwardToWordPress(request, ["customer", "billing"]);
}

export async function PATCH(request: NextRequest) {
  return forwardToWordPress(request, ["customer", "billing"]);
}
