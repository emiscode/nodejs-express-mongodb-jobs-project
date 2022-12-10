import jobs from "../models/Job.js";

class JobsController {
  static listAll = (_, res) => {
    jobs
      .find()
      .populate("company")
      .exec((_, jobs) => {
        res.status(200).send(jobs);
      });
  };

  static listById = (req, res) => {
    const { id } = req.params;

    jobs
      .findById(id)
      .populate("company", "name")
      .exec((err, job) => {
        if (err) {
          res
            .status(404)
            .send({ message: `${err.message} - Could not find job` });
        } else {
          res.status(200).send(job);
        }
      });
  };

  static create = (req, res) => {
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

  static update = (req, res) => {
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

  static delete = (req, res) => {
    const { id } = req.params;

    jobs.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Could not delete job` });
      } else {
        res.status(200).send({ message: "Job deleted" });
      }
    });
  };
}

export default JobsController;
