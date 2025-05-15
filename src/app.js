const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/Auth");

app.use("/admin", adminAuth);

app.get("/admin/getalldata", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteData", (req, res) => {
  res.send("Deleted the data");
});

app.get("/user/login", (req, res) => {
  res.send("Login data");
});

app.get("/user", userAuth, (req, res) => {
  res.send("received the user data");
});

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
