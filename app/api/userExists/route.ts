import { type NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { email } = await request.json();
    const user = await User.findOne({ email }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
