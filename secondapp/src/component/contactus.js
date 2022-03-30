import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";

const Contactus = () =>{
    return(
        <div className="maindiv">
            {/* main div */}

        <div className="cont1">
            {/* for background image */}
            <h1>CONTACT US</h1>
            <div>

            </div>
     </div>

     <div className="mt-2">
         
             
                 <Grid container justifyContent="end">
                     <Grid item md={6}>
                         <Card className="content">
                             <CardContent>
                                <TextField
                                className="w-100 mt-2"
                                autoComplete="off" 
                                placeholder="Name" 
                                label="Name"/>


                                <TextField
                                className="w-100 mt-2"
                                autoComplete="off" 
                                placeholder="Phone Number" 
                                label="Phone Number"/>


                                <TextField
                                className="w-100 mt-2"
                                autoComplete="off" 
                                placeholder="Email" 
                                label="Email"/>


                                <TextField
                                className="w-100 mt-2"
                                autoComplete="off" 
                                placeholder="Subject" 
                                label="Subject"/>


                                <TextField
                                className="w-100 mt-2"
                                autoComplete="off" 
                                placeholder="Message" 
                                label="Message"/>
                                  
                                  <Button 
                                  variant="outlined"
                                  className="w-100 mt-2">
                                      SUBMIT
                                  </Button>
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
    )

}
export default Contactus;