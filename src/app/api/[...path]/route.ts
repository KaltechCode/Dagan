import { NextRequest } from "next/server";
import { forwardToWordPress } from "@/libs/forwardToWordPress";

async function proxy(
  request: NextRequest,
  params: Promise<{ path?: string[] }>,
) {
  const { path = [] } = await params;
  return forwardToWordPress(request, path);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  return proxy(request, Promise.resolve(params));
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  return proxy(request, Promise.resolve(params));
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  return proxy(request, Promise.resolve(params));
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  return proxy(request, Promise.resolve(params));
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  return proxy(request, Promise.resolve(params));
}
