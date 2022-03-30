import { CheckBox } from "@material-ui/icons";
import {Button, Card, CardContent, Checkbox, Grid, paper, TextField} from "@mui/material"

const Signup = () => {
    return(
     <div className="color2">
        <paper className="login-container">
            <Grid container justifyContent="center">
              <Grid item md={4} sm={2}>
              <Card className="mt-4 mb-4">
                {/* for making card color */}
                <CardContent className="color1">
                <p className="h2 text-center mb-5 mt-5 ">SIGNUP HERE</p>

                    <TextField 
                    className="w-100"
                    autoComplete="off" 
                    placeholder="Username" 
                    label="Username"/>

                    
                    <TextField 
                    className="w-100 mt-3" 
                    autoComplete="off"
                    placeholder="Email" 
                    label="Email"/>

                    <TextField 
                    className="w-100 mt-3" 
                    autoComplete="off"
                    placeholder="Mobile No" 
                    label="Mobile No"/>


                    <TextField 
                    className="w-100 mt-3" 
                    autoComplete="off"
                    placeholder="Password" 
                    label="Password"/>


                    <TextField 
                    className="w-100 mt-3" 
                    placeholder="Repeat Password" 
                    label="Repeat Password"/>

                   <div className="mt-3 save">
                     <CheckBox></CheckBox><span></span>
                     <p>Save Password</p>
                   </div>

                    <Button variant="contained"
                    color="secondary"
                    className="button w-100 mt-4" >
                    Signin To Continue
                    </Button>
                   

                    </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            
            </paper>
    </div>
    );
}
export default Signup;



// <div className="parag"> 

// import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"

// const Signup = () => {
//     return (
//         <div className="mt-3 teacher_signup">
//             <Paper className="login-container2">    
//                 <Grid container justifyContent="center">
//                     <Grid md={3} sm={4}>
//                         <Card>
//                             <CardContent className="sign">
//                                 <div className="container signup">
//                                     <div className="row">
//                                         <div className="col">
//                                             <form>
//                                                 <h2 className="text">Sign-up Here</h2>
//                                                 <TextField className="w-100 mt-3 name"
//                                                     // helperText="Enter your name"
//                                                     placeholder="Name"
//                                                     label="name"
//                                                     variant="outlined"
//                                                 />


//                                                 <TextField
//                                                     className="w-100 mt-3"
//                                                     placeholder="Username"
//                                                     label="Username"
//                                                     type="string"
//                                                     variant="outlined"

//                                                 //   helperText="Enter your username"
//                                                 />

//                                                 <TextField
//                                                     className="w-100 mt-3"
//                                                     placeholder="Subject"
//                                                     label="Subject's name"
//                                                     type="string"
//                                                     variant="outlined"

//                                                 //   helperText="Enter your age"
//                                                 />

//                                                 <TextField
//                                                     className="w-100 mt-3"
//                                                     placeholder="Branch"
//                                                     label="Branch"
//                                                     type=""
//                                                     variant="outlined"
//                                                 //   helperText="Enter strong password"
//                                                 />

//                                                 <TextField
//                                                     className="w-100 mt-3"
//                                                     placeholder="password"
//                                                     label="Password"
//                                                     type="password"
//                                                     variant="outlined" />

//                                                 <Button color="error"
//                                                     variant="contained"
//                                                     className="w-50 mt-3"
//                                                     type="submit">
//                                                     submit
//                                                 </Button>
//                                             </form>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Paper>

//         </div>
//     )
// }

// export default Signup
