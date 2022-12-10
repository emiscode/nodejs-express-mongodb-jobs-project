db.createUser({
  user: "emilio",
  pwd: "emilio",
  roles: [
    {
      role: "readWrite",
      db: "jobsproject",
    },
  ],
});

db.createCollection("jobs");

db.jobs.insertOne({
  title: "Software Engineer",
  company: "Apple",
});
