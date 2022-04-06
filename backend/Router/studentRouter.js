const router = require("express").Router();
const Model = require("../models/studentModel");

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

// TO FETCH ALL DATA FROM DATABASE
router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("student list fetched successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


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
