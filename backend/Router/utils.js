const multer = require("multer");
// route create krte hai
const router = require("express").Router();

const storage = multer.diskStorage({
    // 2 objects key rakhte hai 1.st is destination k andr cb v hai 2.filename
  destination: (req, file, cb) => {
    cb(null, "./uploads");
    // cb k andr 2 parameter hai
  },
  filename: (req, file, cb) => {
    //   kis anme se file save karte hai
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

module.exports = router;