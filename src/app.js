import express from "express";
import { jobs } from "./data/jobs.js";
import db from "../config/dbConnection.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connected to the database");
});

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Jobs Project");
});

app.get("/jobs", (_, res) => {
  res.status(200).json(jobs);
});

app.get("/jobs/:id", (req, res) => {
  const { id } = req.params;
  const index = findById(id);

  if (index !== -1) {
    res.status(200).send(jobs[index]);
  } else {
    res.status(404).send("Job not found");
  }
});

app.post("/jobs", (req, res) => {
  jobs.push({ id: jobs.length + 1, ...req.body });
  res.status(201).send("Job created");
});

app.put("/jobs/:id", (req, res) => {
  const { id } = req.params;
  const index = findById(id);

  if (index !== -1) {
    jobs[index] = { id: Number(id), ...req.body };
    res.status(200).send("Job updated");
  } else {
    res.status(404).send("Job not found");
  }
});

app.delete("/jobs/:id", (req, res) => {
  const { id } = req.params;
  const index = findById(id);

  if (index !== -1) {
    delete jobs[index];
    res.status(200).send("Job deleted");
  } else {
    res.status(404).send("Job not found");
  }
});

function findById(id) {
  return jobs.findIndex((job) => job && job.id === Number(id));
}

export default app;
