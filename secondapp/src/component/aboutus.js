import { Button, Grid } from "@mui/material";
import "./aboutus.css";

const Aboutus = () => {
    return(
        <div className="main">
        <div className="abt">
            <h1 className="heading">
            WHY BNCET?</h1>
            </div>

            <div className="container mt-1 why">
                <Grid container>
                    <Grid item md={6}>
                    <img className="img-fluid" src="https://www.myfirstcollege.com/wp-content/uploads/2019/03/bnct-img.jpeg" alt=""></img>
                    </Grid>
                    <Grid item md={6}>
                        <div className="para">
                    <p>BNCET is a consortium of leading colleges of International 
                    standards has been established under the auspicious aegis of 
                    Baij Nath Charitable and Educational Trust in the year 2008 
                    for setting trends and raising standards for management and
                    technical education.</p>
                    <p> The objective of our Techno-Managerial programs is to equip our
                    students with knowledge, skills and confidence needed to develop 
                    corporate leaders, strategists and decision makers who can significantly 
                    contribute in nation building exercise.</p>
                    <p>An exhaustive, intensive industry and trade related curriculum covers 
                    almost all the functional dimensions of techno managerial education. 
                    Case studies, live projects, presentations, seminars, symposiums, 
                    internships, study trips and industrial visits part and parcel of the
                    program.</p>
                    <p>It is our endeavor to make each BNCETian a success story and BNCET              as a pre-eminent techno management college of India for nurturing talent
                    and advancing knowledge in multi ethnic learning environment.</p>
                    </div>
                    <Button className="bt" variant="contained">COURSES AND ELIGIBILTY</Button>
                    </Grid>
                </Grid>
            
            </div>   
        <div className="container">
            <h1>OUR AWARDS</h1>
            <Grid container spacing={1}>
            <Grid item md={4}>
                <img className="" src="https://bncet.ac.in/wp-content/uploads/2022/02/12-300x300.jpg" alt="" />
                </Grid>
                <Grid item md={4}>
                <img className="" src="https://bncet.ac.in/wp-content/uploads/2022/02/13-2-300x300.jpg" alt="" />
                </Grid>
                <Grid item md={4}>
                <img className="" src="https://bncet.ac.in/wp-content/uploads/2022/02/17-1-300x300.jpg" alt="" />
                </Grid>
                

                
                <Grid item md={4}>
                <img className=""src="https://bncet.ac.in/wp-content/uploads/2022/02/10-1-300x300.jpg " alt="" />
                </Grid>
                <Grid item md={4}>
                <img className=""src="https://bncet.ac.in/wp-content/uploads/2022/02/6-1-300x300.jpg" alt="" />
                </Grid>
                
                <Grid item md={4}>
                <img className="" src="https://bncet.ac.in/wp-content/uploads/2022/02/14-2-300x300.jpg" alt="" />
                </Grid>
                
                <Grid item md={4}>
                <img className="img-fluid mt-3" src="https://bncet.ac.in/wp-content/uploads/2022/02/18-300x300.jpg" alt="" />
                </Grid>
               
            </Grid> 

        </div>
        </div>
          
        
    
    )

}
export default Aboutus