const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.get("/", function(request, response){
        response.end("welcome to the ExpressJS")
})

app.get("/user", function(request, response){
    response.json({message : "here is your use data"})
})

app.get("*", function(request, response){
    response.json({message : "cONTACT ADMIN"})
})

const PORT = process.env.PORT || 4200

app.listen(PORT, function(){
    console.log(`Server Listening at PORT ${PORT}`)
})