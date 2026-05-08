const express = require('express');
const app = expreess();

app.get("/", function(req, res){
   resend('index')
})

app.listen(3000);