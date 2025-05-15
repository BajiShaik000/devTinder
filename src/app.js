const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Baji", lastName: "Shaik" });
});

app.post("/user", (req, res) => {
  //save to db
  res.send("saved to db successfully");
});

app.patch("/user", (req, res) => {
  //update in db
  res.send("Updated in db successfully");
});

app.delete("/user", (req, res) => {
  //delete from db
  res.send("deleted from db successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
