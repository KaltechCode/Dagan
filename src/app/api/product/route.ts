import { NextRequest } from "next/server";
import { forwardToWordPress } from "@/libs/forwardToWordPress";

export async function GET(request: NextRequest) {
  return forwardToWordPress(request, ["product"]);
}

export async function POST(request: NextRequest) {
  return forwardToWordPress(request, ["product"]);
}

export async function PUT(request: NextRequest) {
  return forwardToWordPress(request, ["product"]);
}

export async function PATCH(request: NextRequest) {
  return forwardToWordPress(request, ["product"]);
}

export async function DELETE(request: NextRequest) {
  return forwardToWordPress(request, ["product"]);
}
