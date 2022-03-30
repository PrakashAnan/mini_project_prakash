const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name:String,
  fatherName:String,
  dob:Date,
  rollno:Number,
  courseName:String,
  branchName:String,
  admissionDate:Date,
  duration:Number,
  semesterFees:Number,
  totalAmountPaid:Number,
  address:String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("users", mySchema);

module.exports = myModel;


// schema is the structre of the model.