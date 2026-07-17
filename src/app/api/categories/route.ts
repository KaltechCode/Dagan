import { categoryService } from "@/services/categories.services";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await categoryService.getCategories();

    return NextResponse.json({
      success: true,
      message: "Categories retrieved successfully.",
      data: categories,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to retrieve categories.",
        data: [],
      },
      { status: 500 },
    );
  }
}
