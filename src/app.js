const express = require("express");

const app = express();

app.use(
  "/user",
  [(req, res,next) => {
    console.log("Handling the router User");
    next();
    // res.send("Response !!!");
  },
  (req, res,next) => {
    console.log("Handling the route user 2");
    // res.send("Response 2!!!");
    next();
  }],
  (req, res,next) => {
    console.log("Handling the route user 3");
    // res.send("Response 3!!!");
    next();
  },
  (req, res,next) => {
    console.log("Handling the route user 4");
    // res.send("Response 4!!!");
    next();
  },
  [(req, res,next) => {
    console.log("Handling the route user 5");
    res.send("Response 5!!!");
    // next();
  }]
);

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
