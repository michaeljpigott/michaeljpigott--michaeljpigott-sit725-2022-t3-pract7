const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient; //connects MongoDb with the project

//add database connection

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("MongoDB Connected");
  } else {
    console.log("DB Error: ", err);
    process.exit(1);
  }
});

module.exports = client;
