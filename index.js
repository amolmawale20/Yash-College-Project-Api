const express = require('express');
// const dotenv = require("dotenv");
const mongoose = require('mongoose' )
const app = express();
mongoose.set("strictQuery", false);


require('./connection');

// dotenv.config({path:'./config.env'});


//middleware

const middleware = (req, res, next) => {
    console.log("hello my middleware")

}
app.get("/", (req, res) => {
    res.send("app is working....")
});

//creating ports
app.listen(5000, () => {
    console.log(`server is running at port no 5000`)
});

app.get("/SignIn", (req, res) => {
    res.send('Hello world from signin page')
});

app.get('/SignUp', (req, res) => {
    res.send('Hello world from signup page')
});
app.get('/MyProperties', middleware, (req, res) => {
    res.send('Hello world from MyProperties page')
});

app.get('/PropertyRegister', (req, res) => {
    res.send('Hello world from PropertyRegister page')
});



