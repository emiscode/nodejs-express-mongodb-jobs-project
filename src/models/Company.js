import { mongoose } from "mongoose";

const companySchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
});

const companies = mongoose.model("companies", companySchema);

export default companies;
