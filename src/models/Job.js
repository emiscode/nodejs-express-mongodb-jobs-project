import { mongoose } from "mongoose";

const jobSchema = new mongoose.Schema({
  id: String,
  title: { type: String, required: true },
  seniority: { type: String },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

const jobs = mongoose.models.jobs || mongoose.model("jobs", jobSchema);

export default jobs;
