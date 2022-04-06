import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "./config";

const Contactus = () => {
  const url = app_config.api_url;

  const contactForm = {
    name: "",
    phoneno: "",
    email: "",
    subject: "",
    message:"",
  };

  const contactSubmit = (values) => {
    console.log(values);
    fetch(url + "/contact/add", {
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
            text: "WE WILL CONTACT YOU SOON",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  
      
    };

  return (
    <div className="maindiv">
      {/* main div */}

      <div className="cont1">
        {/* for background image */}
        <h1>CONTACT US</h1>
        <div></div>
      </div>

      <div className="mt-2">
        <Grid container justifyContent="end">
          <Grid item md={6}>
            <Card className="content">
              <CardContent>
                <Formik initialValues={contactForm} onSubmit={contactSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Name"
                        label="Name"
                        id="name"
                        onChange={handleChange}
                        value={values.name}
                      />

                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Phone Number"
                        label="Phone Number"
                        id="phoneno"
                        onChange={handleChange}
                        value={values.phoneno}
                      />

                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Email"
                        label="Email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                      />

                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Subject"
                        label="Subject"
                        id="subject"
                        onChange={handleChange}
                        value={values.subject}
                      />

                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Message"
                        label="Message"
                        id="message"
                        onChange={handleChange}
                        value={values.message}
                      />

                      <Button
                        variant="outlined"
                        type="submit"
                        className="w-100 mt-2"
                      >
                        SUBMIT
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6}>
            <h1>GET IN TOUCH WITH US</h1>
            <h3 className="msg">Send a Message</h3>
            <h2 className="font">We Will Always </h2>
            <h2 className="font"> Here To</h2>
            <h2 className="font">Listen You</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Contactus;
