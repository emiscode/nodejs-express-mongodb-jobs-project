import jobs from "../models/Job.js";

class JobsController {
  static listJobs = (_, res) => {
    jobs.find((_, jobs) => {
      res.status(200).send(jobs);
    });
  };

  static listById = (req, res) => {
    const { id } = req.params;

    jobs.findById(id, (err, job) => {
      if (err) {
        res
          .status(404)
          .send({ message: `${err.message} - Could not find job` });
      } else {
        res.status(200).send(job);
      }
    });
  };

  static createJob = (req, res) => {
    const job = new jobs(req.body);

    job.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Could not save job` });
      } else {
        res.status(201).send(job.toJSON());
      }
    });
  };

  static updateJob = (req, res) => {
    const { id } = req.params;

    jobs.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Job updated" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Could not update job` });
      }
    });
  };
}

export default JobsController;
