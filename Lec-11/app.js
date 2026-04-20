const express = require('express');
const app = express();

const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send("hey");
})

//---------------------CRUD-----------------------------------------
app.get('/create', async (req, res)=>{
  let createduser =  await userModel.create({
        name: "mohit roy",
        username: "mohit2004",
        email: "mohit@gmail.com"
    })
    res.send(createduser);
})


app.get('/read', async (req, res)=>{
    let userFind = await userModel.find({username: "purnima2004"}); // find() gives you array
    //let userFind = await userModel.findOne({username: "purnima2004"}); // findOne() gives you obj and it also give if there is 2-3 person name aditya it gives you first one
    res.send(userFind);
})


app.get('/update', async (req, res)=>{
  let updatedUser = await userModel.findOneAndUpdate({username: "aditya2004"}, {name:"Aditya Verma"}, {new: true})
    res.send(updatedUser);
})



app.get('/delete', async (req, res)=>{
    let userDelete = await userModel.findOneAndDelete({username: "purnima2004"});
    res.send(userDelete);
})
app.listen(3000);