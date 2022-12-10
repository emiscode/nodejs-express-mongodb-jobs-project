import companies from "../models/Company.js";

class CompaniesController {
  static listAll = (_, res) => {
    companies.find((_, companies) => {
      res.status(200).send(companies);
    });
  };

  static listById = (req, res) => {
    const { id } = req.params;

    companies.findById(id, (err, company) => {
      if (err) {
        res
          .status(404)
          .send({ message: `${err.message} - Could not find company` });
      } else {
        res.status(200).send(company);
      }
    });
  };

  static create = (req, res) => {
    const company = new companies(req.body);

    company.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Could not save company` });
      } else {
        res.status(201).send(company.toJSON());
      }
    });
  };

  static update = (req, res) => {
    const { id } = req.params;

    companies.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Company updated" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Could not update company` });
      }
    });
  };

  static delete = (req, res) => {
    const { id } = req.params;

    companies.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Could not delete company` });
      } else {
        res.status(200).send({ message: "Company deleted" });
      }
    });
  };
}

export default CompaniesController;
