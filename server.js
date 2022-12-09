import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const port = process.env.SERVER_API_PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
