import { type NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await connectToDB();

    await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "An error occurred while registering the user.",
      },
      { status: 500 },
    );
  }
}
