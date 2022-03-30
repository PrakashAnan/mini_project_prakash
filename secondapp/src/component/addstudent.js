import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import "./addstudent.css";
import app_config from "./config";


const url =app_config.api_url;

const AddStu = () =>{
    fetch(url + '/student/add',{
        method:"POST",
        body:JSON.stringify(values),
        headers:{
            "content-Type":"application.json",
        },
    }).then((res)=>{
        console.log(res.status)
    });
};

const AddStudent = () => {
    return(
        <div>
            <Paper className="addstu">
                <Grid container justifyContent="center">
                    <Grid item md={4} sm={2}>
                        <Card className="mt-4 mb-4">
                            <CardContent className="plss">
                            <p className="h2 text-center mb-5 mt-5 ">ADD STUDENTS</p>
                            
                            <TextField 
                            className="w-100"
                            autoComplete="off" 
                            placeholder="Studentname" 
                            label="Studentname"/>

                    
                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="Fathername" 
                            label="Fathername"/>

                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="DOB" 
                            label="DOB"/>


                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="coursename" 
                            label="Coursename"/>


                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="branchname" 
                            label="Branchname"/>

                            <TextField 
                            className="w-100 mt-3" 
                            autoComplete="off"
                            placeholder="Address" 
                            label="Address"/>


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="admissiondate" 
                            label="Admissiondate"/>


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="duration" 
                            label="Duration"/>


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="semesterfees" 
                            label="Semesterfees"/>


                            <TextField 
                            className="w-100 mt-3" 
                            placeholder="totalamountpaid" 
                            label="Totalamountpaid"/>




                            <Button variant="contained"
                            color="secondary"
                            className="button w-100 mt-4" >
                            AddStudent
                            </Button>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )

}
export default AddStudent;