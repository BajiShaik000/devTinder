const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  console.log("Handling the route user");
  next();
});

app.use("/user", (req, res) => {
  console.log("Handling the route user2");
  res.send("Handled!!");
});

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
