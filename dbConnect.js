const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const URL = "mongodb+srv://backdoor:backdoor123@cluster0.tzgwiym.mongodb.net/?retryWrites=true&w=majority"

const dbConnect = () => {

  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "TruckAI"
  };

  mongoose.connect(URL, connectionParams);

  mongoose.connection.on("connected", () => {
    console.log("connected to database sucessfully")
  })

  mongoose.connection.on("error", (err) => {
    console.log("Error occured while connecting" + err)
  })

  mongoose.connection.on("disconnected", (err) => {
    console.log("Database disconnected")
  })

};

module.exports = dbConnect;