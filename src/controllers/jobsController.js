import jobs from "../models/Job.js";

class JobsController {
  static listJobs = (_, res) => {
    jobs.find((_, jobs) => {
      res.status(200).send(jobs);
    });
  };
}

export default JobsController;
