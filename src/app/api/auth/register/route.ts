import { forwardToWordPress } from "@/libs/forwardToWordPress";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return forwardToWordPress(request, ["register"]);
}
