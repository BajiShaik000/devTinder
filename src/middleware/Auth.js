const adminAuth = (req, res, next) => {
  console.log("admin is getting authenticated");
  const token = "xyz";
  const isAuthenticated = token === "xyz";
  if (!isAuthenticated) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
  console.log("user is getting authenticated");
  const token = "abc";
  const isAuthenticated = token === "abc";
  if (!isAuthenticated) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
