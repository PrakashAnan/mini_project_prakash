import { CheckBox } from "@material-ui/icons";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  paper,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "./config";

const Signup = () => {
  const url = app_config.api_url;

  const signupForm = {
    username: "",
    password: "",
    email: "",
    mobileno: "",
  };
  const signupSubmit = (values) => {
    console.log(values);
    fetch(url + "/teacher/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",},
    })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered Successfully",
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

    
  };

  return (
    <div className="color2">
      <paper className="login-container">
        <Grid container justifyContent="center">
          <Grid item md={4} sm={2}>
            <Card className="mt-4 mb-4">
              {/* for making card color */}
              <CardContent className="color1">
                <p className="h2 text-center mb-5 mt-5 ">SIGNUP HERE</p>

                <Formik initialValues={signupForm} onSubmit={signupSubmit}>
                  {({ values, handleChange, handleSubmit }) => (

                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100"
                        autoComplete="off"
                        placeholder="Username"
                        label="username"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Email"
                        label="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Mobile No"
                        label="mobileno"
                        id="mobileno"
                        onChange={handleChange}
                        value={values.mobileno}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Password"
                        label="password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />

                      {/* <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Password"
                        label="Password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      /> */}

                      <div className="mt-3 save">
                        <CheckBox></CheckBox>
                        <span></span>
                        <p>Save Password</p>
                      </div>

                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className="button w-100 mt-4"
                      >
                        Signin To Continue
                      </Button>
                    </form>
  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </paper>
    </div>
  );
};
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
