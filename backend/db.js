const mongoose = require("mongoose");

const dbUrl = [process.env.DB1_URL || "mongodb://db1/vidly1", process.env.DB2_URL || "mongodb://db2/vidly2"];

opt = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

console.log(dbUrl[0])
const conn1 = mongoose.createConnection(dbUrl[0], opt);
console.log("Connected to MongoDB: " + dbUrl[0]);

const close1 = () => conn1.close();

const conn2 = mongoose.createConnection(dbUrl[1], opt)
console.log("Connected to MongoDB: " + dbUrl[1]);


const close2 = () => conn2.close();


module.exports = { conn1, conn2, close1, close2, url: dbUrl };
