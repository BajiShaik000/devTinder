const express = require("express");

const app = express();
// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Error occured");
//   }
// });

app.get("/getUserData", (req, res) => {
  try {
  throw new Error("Something went wrong");
  res.send("user data sent");
  } catch (error) {
    res.status(500).send("some Error occured contact support team");
  }
});

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Error occured");
//   }
// });

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
