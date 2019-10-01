const express = require('express');
const cors = require('cors');
const generator = require('./password-generator');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",express.static('public'))

app.get("/api", (req,res,next)=>{
    const password = generator(req.query)
    res.status(200).json({
        password:password
    })
});

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})

module.exports = app;