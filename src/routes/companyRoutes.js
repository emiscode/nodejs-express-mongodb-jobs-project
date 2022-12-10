import express from "express";
import CompanyController from "../controllers/companiesController.js";

const router = express.Router();

router
  .get("/companies", CompanyController.listAll)
  .get("/companies/:id", CompanyController.listById)
  .post("/companies", CompanyController.create)
  .put("/companies/:id", CompanyController.update)
  .delete("/companies/:id", CompanyController.delete);

export default router;
