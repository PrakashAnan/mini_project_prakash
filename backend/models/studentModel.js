const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  studentName: String,
  fatherName: String,
  dob: String,
  rollno: Number,
  courseName: String,
  branchName: String,
  admissionDate: String,
  duration: Number,
  yearFees: Number,
  totalAmountPaid: Number,
  address: String,
  year: Number,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("users", mySchema);

module.exports = myModel;

// schema is the structre of the model.
