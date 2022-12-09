import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_API_PORT || 8000;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
