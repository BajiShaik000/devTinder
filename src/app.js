const express = require("express");
const connectDB = require("./config/datbase");
const User = require("./models/User");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    email: "sachin@tendulkar.com",
    password: "sachin@123",
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Unable add User" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("connected to db successfully");
    app.listen("7777", () => {
      console.log("Server started successfully on port 7777....");
    });
  })
  .catch((err) => console.log("Unable to connect to db"));
