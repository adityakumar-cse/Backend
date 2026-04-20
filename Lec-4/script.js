// const express = require('express');

// const app = express();

// // app.get(Router, requestHandler) requestHandler is always a function
// app.get("/", function(req, res){
//     res.send("champion mera bhai")
// })

// app.get("/profile", function(req, res){
//     res.send("championnnn uska bada bhai")
// })

// app.listen(3000);



//----------------------------------Middleware-------------------------------


// const express = require('express');
// const { log } = require('node:console');

// const app = express();

// app.use(function(req, res, next){
//     console.log('middleware chala');
//     next();
// });
// app.use(function(req, res, next){
//     console.log('middleware ek bar fir chala');
//     next();
// });


// // app.get(Router, requestHandler) requestHandler is always a function
// app.get("/", function(req, res){
//     res.send("champion mera bhai")
// })

// app.get("/profile", function(req, res){
//     res.send("championnnn uska bada bhai")
// })


// app.listen(3000);



//--------------------------------- Error Handler--------------------------------------------------------



const express = require('express');
const { log } = require('node:console');

const app = express();

app.use(function(req, res, next){
    console.log('middleware chala');
    next();
});
app.use(function(req, res, next){
    console.log('middleware ek bar fir chala');
    next();
});


// app.get(Router, requestHandler) requestHandler is always a function
app.get("/", function(req, res){
    res.send("champion mera bhai")
});

app.get("/profile", function(req, res){
    res.send("championnnn uska bada bhai")
});

app.get("/about", function(req, res, next){
    // res.send("about champion ")
    return next(new Error("something went wrong"))
});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send('something broken!')
    
});

app.listen(3000); 