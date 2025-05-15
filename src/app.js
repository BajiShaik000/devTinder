const express = require("express");

const app = express();
//b optional
// app.get(/\/ab?c/, (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });
//any no of b's
// app.get(/\/ab+c/, (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

//anything in between ab and c
// app.get("/ab*c", (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

//grouping
// app.get(/\/a(bc)+d/, (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

//anything which is having in a
// app.get(/a/, (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

//anything which matches pattern
// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

//query params
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

//dynamic routing
app.get("/user/:userid", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Baji", lastName: "Shaik" });
});

// app.get("/user", (req, res) => {
//   res.send({ firstName: "Baji", lastName: "Shaik" });
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from test");
// });

app.listen("7777", () => {
  console.log("Server started successfully on port 7777....");
});
