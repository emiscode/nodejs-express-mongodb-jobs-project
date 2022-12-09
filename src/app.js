import express from "express";
import { jobs } from "./data/jobs.js";

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Jobs Project");
});

app.get("/jobs", (_, res) => {
  res.status(200).json(jobs);
});

app.post("/jobs", (req, res) => {
  jobs.push({ id: jobs.length + 1, ...req.body });
  res.status(201).send("Job created");
});

export default app;
