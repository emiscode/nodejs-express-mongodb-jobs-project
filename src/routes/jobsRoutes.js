import express from "express";
import JobsController from "../controllers/jobsController.js";

const router = express.Router();

router
  .get("/jobs", JobsController.listJobs)
  .post("/jobs", JobsController.createJob);

export default router;