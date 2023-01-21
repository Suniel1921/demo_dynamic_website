const express = require('express');
const { rmSync } = require('fs');
const path = require('path');
const dbconnection = require('./database/conn')
const userDetails = require('./models/userschema')


const app = express();
const PORT = process.env.PORT || 4000;


//setting path 
const publicPath = path.join(__dirname, 'public')


//middleware
app.use(express.static(publicPath))
app.use(express.urlencoded({extended:false}));



//tempalte/ view engine
app.set('view engine', 'ejs');


app.get("/",(req, res)=>{
    res.render('index',{
        title : 'Home'
    })
})

app.get("/about", (req,res)=>{
    res.render('about',{
        title: 'About'
    });
})

app.get("/contact", (req,res)=>{
    res.render('contact',{
        title : 'Contact'
    });
})

app.get("/services", (req, res)=>{
    res.render('services',{
        title : 'Services'
    });
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port no : ${PORT}`);
})

//post method

app.post('/contact', async (req,res)=>{
    try {
        const userData = new userDetails(req.body);
       await userData.save();   
       res.status(201).send("<h2>your form is successfully submitted !<h2/>")        
        
    } catch (error) {
        res.status(500).send(error);
        
    }
})