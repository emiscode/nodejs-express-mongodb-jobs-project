import { mongoose } from "mongoose";

const jobSchema = new mongoose.Schema({
  id: String,
  title: { type: String, required: true },
  company: String,
});

const jobs = mongoose.model("jobs", jobSchema);

export default jobs;
