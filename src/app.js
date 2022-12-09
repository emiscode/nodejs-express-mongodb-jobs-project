import express from "express";
import { jobs } from "./data/jobs.js";

const app = express();

app.get("/", (_, res) => {
  res.status(200).send("Jobs Project");
});

app.get("/jobs", (_, res) => {
  res.status(200).json(jobs);
});

export default app;
