const express = require("express");
const connectDB = require("./config/datbase");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating user instance
  const user = new User(req.body);
  try {
    if (req?.body?.skills?.length > 10) {
      throw new Error("Cannot update more than 10 skills");
    }
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Unable add User " + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
    // const users = await User.find({ email: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("User not found");
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("Something went wrong!!!");
  }
});

//deleting user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send("User deleted successfully");
    }
  } catch (error) {
    res.send(400).send("Something went wrong");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = [
      "firstName",
      "password",
      "age",
      "about",
      "skills",
      "photoUrl",
    ];

    const isAllowed = Object.keys(req.body).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isAllowed) {
      throw new Error("cannot update the fields");
    }

    if (data?.skills?.length > 10) {
      throw new Error("Cannot update more than 10 skills");
    }

    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    if (!user) {
      res.status(404).send("Unable to find and update user");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong " + error.message);
  }
});

app.patch("/userByEmail", async (req, res) => {
  const email = req.body.email;
  const body = req.body;
  try {
    const user = await User.findOneAndUpdate({ email: email }, body);
    if (!user) {
      res.status(404).send("User not found to update");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/userById", async (req, res) => {
  const userId = req.body.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.send(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).send("Users not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!!!");
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
