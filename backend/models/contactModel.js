const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name:String,
  phoneno:Number,
  email:String,
  subject:String,
  message:String,
  
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("Contact", mySchema);

module.exports = myModel;