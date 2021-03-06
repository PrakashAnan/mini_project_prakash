import { Grid } from "@mui/material";

const Head = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <div className="row college1">
            <div className="col">
              <div className="contact1 row">
                <div className="col">

                    {/* FOR HEADER SECTION */}
                    <Grid container>
                        <Grid item md={3}>
                        <div className="top-header_contact">7488250997</div>
                        </Grid>
                        <Grid item md={3}>
                        <div className="top-header_contact">Bncet@gmail.com</div>
                        </Grid>
                        <Grid item md={3}>
                        <div className="top-header_contact">Affliation N0:12345</div>
                        </Grid>
                        <Grid item md={3}>
                        <div className="top-header_contact">College code:432</div>
                        </Grid>
                    </Grid>
                   
                  {/* <div className="top-header_contact">7488250997</div>
                  <div className="top-header_contact">Bncet@gmail.com</div>
                  <div className="top-header_contact">Affliation N0:12345</div>
                  <div className="top-header_contact">College code:432</div> */}
                </div>
              </div>
              <img
                class="logo"
                src="https://play-lh.googleusercontent.com/TcCg6q50fqDnfhT7Vktcg9Mz5U18K724wJMEnlBpoIumsKVmOsArlVbPLJFrKdAoxA"
                alt=""
              />
              <h2 class="college">BN COLLEGE OF ENGINEERING AND TECHNOLOGY</h2>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* without grid whole page */}
      {/*            
        <div className="row college1">
        <div className="col">
        <div className="contact1 row">
        <div className="col"> 
            <div className="top-header_contact">7488250997</div>
            <div className="top-header_contact">Bncet@gmail.com</div>
            <div className="top-header_contact">Affliation N0:12345</div>
            <div className="top-header_contact">College code:432</div> 
        </div>
        </div>
        <img class="logo" src="https://play-lh.googleusercontent.com/TcCg6q50fqDnfhT7Vktcg9Mz5U18K724wJMEnlBpoIumsKVmOsArlVbPLJFrKdAoxA" alt=""/>
        <h2 class="college">BN COLLEGE OF ENGINEERING AND TECHNOLOGY</h2>
         </div>
      </div> */}
    </div>
  );
};

export default Head;
