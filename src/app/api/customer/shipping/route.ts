import { NextRequest } from "next/server";

import { forwardToWordPress } from "@/libs/forwardToWordPress";

export async function PUT(request: NextRequest) {
  return forwardToWordPress(request, ["customer", "shipping"]);
}

export async function PATCH(request: NextRequest) {
  return forwardToWordPress(request, ["customer", "shipping"]);
}
