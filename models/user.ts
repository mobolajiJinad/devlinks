import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
    links: [
      {
        type: Schema.Types.ObjectId,
        ref: "Link",
      },
    ],
    profilePicture: String,
    firstName: String,
    lastName: String,
  },
  { timestamps: true },
);

const User = models.User || model("User", UserSchema);

export default User;
