import { NextRequest, NextResponse } from "next/server";

import Link from "@/models/link";
import { connectToDB } from "@/lib/database";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    await connectToDB();

    const links = await Link.find({ creator: id }).lean();

    return NextResponse.json(links);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch links for user" },
      { status: 500 },
    );
  }
}
