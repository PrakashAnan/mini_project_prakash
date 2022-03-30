const router = require("express").Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
   console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved successfully..");
      res.status(200).json(data);
})
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);

    
});

});

router.post("/checklogin", (req, res) => {

  let formdata= req.body;
  // req.body k through formdata mn data nikl rhe hai
  Model.findOne({username:formdata.username})
  // findOne humlog isliye use kar rhe hai taaki data array k form mn mat aaye
    .then((data) => {
      // username mn se jo data aaya hai wo kch data variable mn aaega 
      if(data){
        // data jo yha aaega wo match krega if k condtion mn
        console.log("data found");
        if(data.password === formdata.password){
          // data pass ko client k pass se match krega 
          console.log("login successfull")
          res.status(200).json({ status :'success'});
          // client ko pta chlne k liye response dikhane k liye

        }
        else{
          console.log("password incorrect");
          res.status(300).json( {status :'fail'});

        }
        
        }else{
          console.log("data not found");
          res.status(300).json( {status :'fail'});

        }
      })
    })
     


// for exporting router
module.exports = router;





// middleware ka kam hai request me change krne ka
// parse matlab readable format mn bna deta hai(doobara js mn cnvrt kr dega)
// advantage of using mongoDb::::it generates id by itself;
// devlopment phase and production phase
// devlopment phase tb ue krte hai jab hum kaam kar rhe ho website mode pe.
// production mode humlog tab use kartehai jub hum project ko deploy kr dete hai
// jitne v website bnane wala language hai subme json chl jata hai
// express.json ka kaam ye hai ki jo v data aa rha hai json k format mn uskoo parse krta hai
// w-100 humlog content field ko screen k size se adjust krne k lie use karte hai
