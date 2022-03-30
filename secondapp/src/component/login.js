import { CheckBox } from "@material-ui/icons";
import { Button, Card, CardContent, Checkbox, Grid, Paper, TextField } from "@mui/material";



const Login = () => {
    return (

        <div>
            <Paper className="back1">
                <Grid container justifyContent="center">
                    <Grid item md={4} >
                        <Card className="mt-4 mb-4">
                            <CardContent className="inline-background">
                                <p className="h3 text-center mb-3 mt-3">Login Here</p>

                                <TextField
                                    className="w-100 mt-5"
                                    placeholder="Username/email"
                                    label="Username" />

                                <TextField
                                    className="w-100 mt-3"
                                    placeholder="Password"
                                    label="Password" />
                                    
                                
                                    
                                    
                                <div className="mt-3">
                                <CheckBox size="small"/>Remember me
                                <p className="rem">Remember Me</p>
                                </div>

                                <Button variant="contained"
                                    color="secondary"
                                    className="button mt-2 w-100 ">
                                    Login Here
                                   
                                </Button>
                                <div className="">
                                <p className="or">Or Sign Up Using</p>
                                </div>

                                {/* social media icons */}
                                <div className="mt-4">
                                <a href="" className="fa-brands fa-whatsapp"></a>
                                <a href="" className="fa-brands fa-instagram"></a>
                                <a href="" className="fa-brands fa-facebook-f"></a>
                                </div>

                                <div className="link mt-5">
                                <p>Forget<a href=""> Password?</a></p>
                                </div>
                                <div className="acc mt-3">
                                <p>Don't Have An Account?<a href="">Sign up</a></p>
                                </div>
                                

                                {/* <WhatsAppIcon /> */}



                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Paper>
        </div>


    );


}
export default Login