const express = require("express")
const http= require ("http")
const path = require("path")
const app= express()
const server = http.createServer(app)
const{Server}= require("socket.io");

const io= new Server(server)


io.on('connection',(socket)=>{
    socket.on('user-message', (message)=>{
        io.emit('message', message)
        console.log("A new user message:\n", message )
    })
})



app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    return res.render("/public/index.html")
})



server.listen(9000,()=>{
    console.log('server is listening at port 9000')
})