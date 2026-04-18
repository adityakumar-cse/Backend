// * this will show the path of folder where we are working - D:\WORK\Backend\Lec-6
//console.log(__dirname);

// * this will show upto public folder - D:\WORK\Backend\Lec-6/public
//console.log(__dirname+'/public');

// Q) what path.join do -> this also do same thing and we use this only for good way
//const path = require('path');
//console.log(path.join(__dirname, 'public')); // -- for this we have to require path name package


//-------------------------------------------------------------------------------------------------------------



const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public'))); // this express.static say tha static files ko is path mai dhodna this line - (path.join(__dirname, 'public')
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index")
})
// app.get("/profile/:username", function(req, res){ // this : shows that after : part anything kuchbhi ho wo dynamic hai we can write anything now it will work and now the aditya become variable 
//    // in website if we write any name after profile/ the waht will value of usename and how to get that name in this route we use below line code written
//     req.params.username  // req.params means aisa kuch bhi jiske aage : colon
//     res.send("chal raha hai")
// })

app.get("/profile/:username", function(req, res){
    res.send(`welcome, ${req.params.username}`);
})
app.get("/author/:username/:age", function(req, res){
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000, function(){
    console.log("it's running");
    
});