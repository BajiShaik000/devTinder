const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  //this is called as middleware
  next();
});

app.use(
  "/user",
  (req, res, next) => {
    // this is also middleware
    next();
  },
  (req, res, next) => {
    // this is also middleware
    next();
  },
  (req, res) => {
    // this is route handler as it is sending the response back to client
    console.log("Handling the route user2");
    res.send("Handled!!");
  }
);

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
