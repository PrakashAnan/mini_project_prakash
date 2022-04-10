import { FormatStrikethrough } from "@material-ui/icons";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import "./addstudent.css";
import { Formik } from "formik";
// without refreshing th epage we should add the data thats why we use formik
import app_config from "./config";
import { useState } from "react";

const AddStudent = () => {
  const url = app_config.api_url;
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  // 1.CREATE A FORM OBJECT
  const productForm = {
    studentName: "",
    fatherName: "",
    dob: "",
    rollno: "",
    courseName: "",
    branchName: "",
    address: "",
    addmissionDate:"",
    duration: "",
    yearFees: "",
    year: 1,
    totalAmountPaid: "",
  };

  //   2.CREATION A SUBMIT CALLBACK FUNCTION
  const submitStudent = (values) => {
    fetch(url + "/student/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
    });
  };

  return (
    <div>
      <Paper className="addstu">
        <Grid container justifyContent="center">
          <Grid item md={4} sm={2}>
            <Card className="mt-4 mb-4">
              <CardContent className="plss">
                <p className="h2 text-center mb-5 mt-5 ">ADD STUDENTS</p>

                <Formik initialValues={productForm} onSubmit={submitStudent}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100"
                        autoComplete="off"
                        placeholder="Studentname"
                        label="StudentName"
                        id="studentName"
                        value={values.studentName}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Fathername"
                        label="FatherName"
                        id="fatherName"
                        value={values.fatherName}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="DOB"
                        label="DOB"
                        id="dob"
                        value={values.dob}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="rollNo"
                        label="rollno"
                        id="rollno"
                        value={values.rollno}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="coursename"
                        label="CourseName"
                        id="courseName"
                        value={values.courseName}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="branchname"
                        label="BranchName"
                        id="branchName"
                        value={values.branchName}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Address"
                        label="Address"
                        id="address"
                        value={values.address}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="admissiondate"
                        label="AdmissionDate"
                        id="addmissionDate"
                        value={values.addmissionDate}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="semesterfees"
                        label="YearFees"
                        id="yearFees"
                        value={values.yearFees}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="duration"
                        label="Duration"
                        id="duration"
                        value={values.duration}
                        onChange={handleChange}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="Semester"
                        label="Current Year"
                        id="year"
                        value={values.year}
                        onChange={handleChange}
                      />

                      

                      <TextField
                        className="w-100 mt-3"
                        placeholder="totalamountpaid"
                        label="totalAmountPaid"
                        id="totalAmountPaid"
                        value={values.totalAmountPaid}
                        onChange={handleChange}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="button w-100 mt-4"
                      >
                        AddStudent
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AddStudent;
