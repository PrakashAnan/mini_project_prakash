import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material"

const Login = () => {
    return(

        <div className="back1">
        
            
            <Paper>
               <Grid container justifyContent="center">
                   <Grid item  md={4} sm={2}>
                       <Card>
                           <CardContent className="inline-background">
                            <p className="h3 text-center mb-3 mt-3">Login Here</p>

                           <TextField 
                           className="w-100 mt-5" 
                           placeholder="Username/email" 
                           label="Username"/>

                           <TextField 
                           className="w-100 mt-3" 
                           placeholder="Password" 
                           label="Password"/>

                          

                           <Button variant="contained"
                           color="secondary"
                           className="button mt-3 w-100 " >
                           Login Here
                           </Button>


                                
                           </CardContent>
                       </Card>
                   </Grid>
               </Grid>
                
            </Paper>
            </div>
    
    
    )
    

}
export default Login