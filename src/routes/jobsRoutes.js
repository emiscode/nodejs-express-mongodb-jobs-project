import express from "express";
import JobsController from "../controllers/jobsController.js";

const router = express.Router();

router
  .get("/jobs", JobsController.listAll)
  .get("/jobs/:id", JobsController.listById)
  .post("/jobs", JobsController.create)
  .put("/jobs/:id", JobsController.update)
  .delete("/jobs/:id", JobsController.delete);

export default router;
