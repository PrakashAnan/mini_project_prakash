import { useEffect, useState } from "react";
import app_config from "./config";
import {
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import "./liststudent.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const ListStudent = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

  const checkDefaulter = (student) => {
    if (student.yearFees * student.year > student.totalAmountPaid) {
      return true;
    }
    return false;
  };

  const displayStudents = () => {
    if (!loading) {
      return productArray.map((student) => (
        <div className="container mt-2">
          <Accordion>
            <AccordionSummary>
                    
              <h4>StudentName:</h4>
              <h4>{student.studentName}</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <ul class="list-group">
                    <li class="list-group-item">
                      FatherName:{student.fatherName}
                    </li>
                    <li class="list-group-item">
                      Date Of Birth::{student.dob}
                    </li>
                    <li class="list-group-item">Roll no:{student.rollno}</li>
                    <li class="list-group-item">
                      CourseName:{student.courseName}
                    </li>
                    <li class="list-group-item">
                      BrachName:{student.branchName}
                    </li>
                    <li class="list-group-item">
                      AddmissionDate:{student.admissionDate}
                    </li>
                    <li class="list-group-item">Duration:{student.duration}</li>
                    <li class="list-group-item">Current Year:{student.year}</li>
                    <li class="list-group-item">YearFees:{student.yearFees}</li>
                    <li class="list-group-item">
                      TotalAmountPaid:{student.totalAmountPaid}
                    </li>
                    <li class="list-group-item">Address::{student.address}</li>
                  </ul>
                  <Button
                    variant="contained"
                    className="mt-2 w-100 "
                    color={checkDefaulter(student) ? "error" : "success"}
                  >
                    {checkDefaulter(student) ? "Defaulter" : "Fee Cleared"}
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Paper>
                    <Card>
                      <div className="check mt-2">
                        <h2>Fees Deposited</h2>
                        <ul class="list-group">
                          <li class="list-group-item">
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="1st YEAR"
                            />
                          </li>
                          <li class="list-group-item">
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="2nd YEAR"
                            />
                          </li>
                          <li class="list-group-item">
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="3rd YEAR"
                            />
                          </li>
                          <li class="list-group-item">
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="4th YEAR"
                            />
                          </li>
                        </ul>
                        {/* <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="1st YEAR"
                        />
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="2nd YEAR"
                        />
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="3rd YEAR"
                        />
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="4th YEAR"
                        /> */}
                      
                      </div>
                    </Card>
                  </Paper>
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
