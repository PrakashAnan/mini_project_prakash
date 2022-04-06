
const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  username:String,
  password:String,
  mobileno:Number,
  
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("teachers", mySchema);

module.exports = myModel;


// schema is the structre of the model.