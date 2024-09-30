const express = require('express');
const  app = express();
const cors = require("cors");
const server = require("http").createServer(app); 
const {Server} = require("socket.io");
const io = new Server();
app.use(cors());
io.on("connection",(socket)=>{
    console.log("event emited");
})
app.get('/',(req,res)=>{
    res.send("hello this is nitin lohumi");
})
server.listen(3000,()=>{
    console.log("the app is listening in port number 3000");
})