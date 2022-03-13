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

