import mongoose from "mongoose";

const connectToDb = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));
};

export default connectToDb;
