import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jassim:jassim123@cluster0.cbddag5.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
