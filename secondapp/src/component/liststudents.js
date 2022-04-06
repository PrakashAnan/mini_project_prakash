import { useEffect, useState } from "react";
import app_config from "./config";
import { Grid, Card, CardContent, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const ListStudent = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const FetchData = () => {
    fetch(url + "/student/getall", {
      method: "GET",
      // data hmko send ni krna hai isliye get method use karte hai
    })
      .then((res) => res.json())
      // res se json nikalne k liye
      .then((data) => {
        // dusra then jo hai json data read krne k liye
        console.log(data);
        setProductArray(data);
        setLoading(false);
        // data print krwa rhe hai
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  //   jaise hi ye page opn hoga fetch data chlega

  const displayStudents = () => {
    if (!loading) {
      return productArray.map((student) => (
        <div className="container">
          <Accordion>
            <AccordionSummary>
              <h3>StudentName:</h3>
              <h4>{student.studentName}</h4>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Grid container>
                <Grid item md={12}>
                  <div className="list">
                    <table>
                      <tr>
                        <th>Father's Name</th>
                        <th>Date of birth</th>
                        <th>Roll no</th>
                        <th>CourseName</th>
                        <th>BranchName</th>
                        <th>AdmissionDate</th>
                        <th>Duration</th>
                        <th>SemesterFees</th>
                        <th>TotalAmountPaid</th>
                        <th>Address</th>
                      </tr>

                      <tr>
                        <td>{student.fatherName}</td>
                        <td>{student.dob}</td>
                        <td>{student.rollno}</td>
                        <td>{student.courseName}</td>
                        <td>{student.branchName}</td>
                        <td>{student.admissionDate}</td>
                        <td>{student.duration}</td>
                        <td>{student.semesterFees}</td>
                        <td>{student.totalAmountPaid}</td>
                        <td>{student.address}</td>
                      </tr>
                    </table>
                  </div>
                </Grid>
              </Grid> */}

              <Grid container>
                <Grid item md={12}>
                  <ul class="list-group">
                    <li class="list-group-item">FatherName:{student.fatherName}</li>
                    <li class="list-group-item">Date Of Birth{student.dob}</li>
                    <li class="list-group-item">Roll no:{student.rollno}</li>
                    <li class="list-group-item">CourseName:{student.courseName}</li>
                    <li class="list-group-item">BrachName:{student.branchName}</li>
                    <li class="list-group-item">AddmissionDate:{student.admissionDate}</li>
                    <li class="list-group-item">Duration:{student.duration}</li>
                    <li class="list-group-item">SemesterFees:{student.semesterFees}</li>
                    <li class="list-group-item">TotalAmountPaid:{student.totalAmountPaid}</li>
                    <li class="list-group-item">Address:{student.address}</li>
                  </ul>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      ));
    }
  };

  return <div>{displayStudents()}</div>;
};

export default ListStudent;
