import jobs from "../models/Job.js";

class JobsController {
  static listJobs = (_, res) => {
    jobs.find((_, jobs) => {
      res.status(200).send(jobs);
    });
  };

  static createJob = (req, res) => {
    const job = new jobs(req.body);

    job.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - could not save` });
      } else {
        res.status(201).send(job.toJSON());
      }
    });
  };
}

export default JobsController;
