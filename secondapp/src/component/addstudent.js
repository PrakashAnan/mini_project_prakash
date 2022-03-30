import { FormatStrikethrough } from "@material-ui/icons";
import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import "./addstudent.css";
import { Formik } from "formik";
import app_config from "./config";


const url =app_config.api_url;
const AddStudent = () => {

// const submitStudent = () =>{
//     fetch(url + '/student/add',{
//         method:"POST",
//         body:JSON.stringify(values),
//         headers:{
//             "content-Type":"application.json",
//         },
//     }).then((res)=>{
//         console.log(res.status)
//     });
// };

const productForm = {
    studentname: "",
    fathername: "",
    dob: "",
    coursename: "",
    branchname: "",
    address: "",
    addmissiondate: "",
    duration: "",
    semesterfees: "",
    totalamountfees: "",
  };
   
  const submitStudent =(values) =>{
   fetch(url + "/student/add", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
})
}

    return(
        <div>
            <Paper className="addstu">
                <Grid container justifyContent="center">
                    <Grid item md={4} sm={2}>
                        <Card className="mt-4 mb-4">
                            <CardContent className="plss">
                            <p className="h2 text-center mb-5 mt-5 ">ADD STUDENTS</p>
                             
                            <Formik initialValues={productForm} onSubmit={submitStudent}>
                            {({ values, handleChange, handleSubmit }) => (
                            
                            
                            <Form onSubmit={handleSubmit}>
                            <TextField 
                            className="w-100"
                            autoComplete="off" 
                            placeholder="Studentname" 
                            label="Studentname"
                            id="studentname"
                            value={values.studentname}
                            onChange={handleChange}/>

                    
                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="Fathername" 
                            label="Fathername"
                            id="fathername"
                            value={values.fathername}
                            onChange={handleChange}/>

                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="DOB" 
                            label="DOB"
                            id="dob"
                            value={values.dob}
                            onChange={handleChange}/>


                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="coursename" 
                            label="Coursename"
                            id="cousename"
                            value={values.cousename}
                            onChange={handleChange}/>


                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="branchname" 
                            label="Branchname"
                            id="branchname"
                            value={values.branchname}
                            onChange={handleChange}/>

                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="Address" 
                            label="Address"
                            id="address"
                            value={values.address}
                            onChange={handleChange}/>


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="admissiondate" 
                            label="Admissiondate"
                            id="addmissiondate"
                            value={values.addmissiondate}
                            onChange={handleChange}/>


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="duration" 
                            label="Duration"
                            id="duration"
                            value={values.duration}
                            onChange={handleChange}/>

                            


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="semesterfees" 
                            label="Semesterfees"
                            id="semesterfees"
                            value={values.semesterfees}
                            onChange={handleChange}/>



                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="totalamountpaid" 
                            label="Totalamountpaid"
                            id="totalamountpaid"
                            value={values.totalamountpaid}
                            onChange={handleChange}/>





                            <Button variant="contained"
                            color="secondary"
                            className="button w-100 mt-4" >
                            AddStudent
                            </Button>
                            </Form>
                            )}
                            </Formik>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )

}


export default AddStudent;