import express from "express";
import jobsRoutes from "./jobsRoutes.js";

const routes = (app) => {
  app.route("/").get((_, res) => {
    res.status(200).send("Jobs Project");
  });

  app.use(express.json(), jobsRoutes);
};

export default routes;
