import { ServerApp } from "./server";

const run = async () => {
  new ServerApp().start(4000);
};

run().catch((err) => {
  console.log(err);
  process.exit(0);
});
