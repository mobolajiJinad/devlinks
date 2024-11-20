import { type NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { ID } = await request.json();
    if (!ID) {
      return NextResponse.json(
        { error: "ID needed" },
        {
          status: 400,
        },
      );
    }

    const user = await User.findById(ID);
    return NextResponse.json({
      email: user.email,
      profilePicture: user.profilePicture,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      },
    );
  }
}

export async function PUT(request: NextRequest) {
  // logic for updating user data
}
