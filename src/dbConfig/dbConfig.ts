import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database is connected.");
    });

    connection.on("error", (err) => {
      console.log("Database is not connected");
    });
  } catch (error) {
    console.log("Error occured.");
  }
}
