import express from "express";
import JobsController from "../controllers/jobsController.js";

const router = express.Router();

router
  .get("/jobs", JobsController.listJobs)
  .get("/jobs/:id", JobsController.listById)
  .post("/jobs", JobsController.createJob)
  .put("/jobs/:id", JobsController.updateJob)
  .delete("/jobs/:id", JobsController.deleteJob);

export default router;
