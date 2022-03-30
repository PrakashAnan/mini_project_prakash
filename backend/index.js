const express = require("express");
const app= express();
const port=5000;
const cors=require('cors');

const userRouter = require("./Router/studentRouter");
const utilRouter = require("./router/utils");

const {createServer,}=require("http");
const { Server } = require("Socket.io");

const httpServer=createServer(app);
const io = new Server(httpServer,{
    cors:{origin:['http://localhost:3000']}
 });

io.on("connection",(socket) =>{
    console.log("client connected")
    //   on function is used for recieving the message
    socket.on("sendmsg",(data)=>{
        data.sent=false;
        // here alo sendmsg is an event used from backend
        console.log(data);
    })

})

app.use(express.json());

app.use(cors({
    origin : ['http://localhost:3000']

}))
app.use("/user", userRouter);
// app.use("/product", productRouter);
app.use("/util", utilRouter);


// for serving static resources
app.use(express.static("./uploads"));
// isse pta chlega kha jaega or kya lganna pdega issse or ye connection k liye use karte hai

//    app.get("/",(req,res) => {
//    res.send("you got a resonse");
// })
// app.get("/home",(req,res) => {
//     res.send("you got a resonse from home");
// })

// app.listen(port,()=>{
//     console.log(" server started")
// })

//    for using socket.io
httpServer.listen(port,()=>{
    console.log(" server started")
})





