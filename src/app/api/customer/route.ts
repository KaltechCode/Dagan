import { forwardToWordPress } from "@/libs/forwardToWordPress";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return forwardToWordPress(request, ["customer", "profile"]);
}
