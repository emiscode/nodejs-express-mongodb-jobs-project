import { mongoose } from "mongoose";

async function main() {
  await mongoose.connect("mongodb://emilio:emilio@localhost:27017/jobsproject");
}

main().catch((err) => console.log(err));

let db = mongoose.connection;

export default db;
