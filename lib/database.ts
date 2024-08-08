import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables",
      );
    }

    await mongoose.connect(mongoURI, {
      dbName: "devlinks",
    });

    mongoose.connection.on("connected", () => {
      isConnected = true;
      console.log("MongoDB is connected");
    });

    mongoose.connection.on("error", (error) => {
      console.log("MongoDB connection error:", error);
    });

    mongoose.connection.on("disconnected", () => {
      isConnected = false;
      console.log("MongoDB connection disconnected");
    });
  } catch (error) {
    console.log(error);
  }
};
