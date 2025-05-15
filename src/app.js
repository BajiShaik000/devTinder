const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello from hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.use("/", (req, res) => {
  res.send("Namaste Node.js");
});

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
