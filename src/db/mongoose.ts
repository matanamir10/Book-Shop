import mongoose from "mongoose";

export const connectToDB = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(resolve)
      .catch(reject);
  });
};
