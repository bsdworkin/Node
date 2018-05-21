const express = require('express');

var app = express();

//Register a handler
app.get('/', (req, res)=>{
    res.send('Hello Express');
});

//Bind app to port on machine
app.listen(3000);