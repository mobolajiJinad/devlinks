import { type NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { ID } = await request.json();
    if (!ID) {
      return NextResponse.json({ error: "ID needed" }, { status: 400 });
    }

    const user = await User.findById(ID);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

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
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectToDB();

    const formData = await request.formData();

    const profilePicture = formData.get("profilePicture") as File | null;
    const email = formData.get("email") as string | null;
    const firstName = formData.get("firstName") as string | null;
    const lastName = formData.get("lastName") as string | null;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    let profilePicturePath: string | undefined;

    if (profilePicture) {
      const buffer = Buffer.from(await profilePicture.arrayBuffer());

      const fileName = `${email}_${profilePicture.name.replaceAll(" ", "_")}`;
      profilePicturePath = `/users/${fileName}`;

      try {
        // Write the file to the specified directory (public/assets) with the modified filename
        await writeFile(
          path.join(process.cwd(), "public", profilePicturePath),
          buffer,
        );
      } catch (error) {
        console.error("Error occurred ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
      }
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        email: email || undefined,
        profilePicture: profilePicturePath || undefined,
      },
      { new: true },
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
