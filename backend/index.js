const express = require("express");
const app= express();
const port=5000;
const cors=require('cors');

const studentRouter = require("./Router/studentRouter");
const contactRouter = require("./Router/contactRouter");
const teacherRouter = require("./Router/teacherRouter");
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
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/contact", contactRouter);
app.use("/util", utilRouter);


//    for using socket.io
httpServer.listen(port,()=>{
    console.log(" server started")
})





