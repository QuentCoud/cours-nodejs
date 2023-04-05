import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("je suis dans un middleware")
  next()
});

app.use((req, res, next) => {
  console.log("je suis dans un autre middleware")
  next()
});

app.get("/", (req, res, next) => {
  res.send("hello world");
});

app.listen("3000");