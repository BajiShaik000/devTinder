const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bajishaik000:Abbaammi786@clusternode.nxodgi5.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
