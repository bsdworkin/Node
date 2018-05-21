const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next)=>{
	var now  = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err)=>{
		if(err){
			console.log('Unable to append file');
		}
	});
    next();
});

//app.use((req, res, next)=>{
//    res.render('maintenance.hbs');
//});

//Middleware for express
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text)=>{
	return text.toUpperCase();
});

//Register a handler
app.get('/', (req, res)=>{
    //res.send('<h1>Hello Express</h1>');

    // res.send({
    // 	name: 'Ben',
    // 	likes:[
    // 	'sports',
    // 	'food'
    // 	]
    // });

    res.render('home.hbs', {
    	pageTitle: 'home Page',
    	welcomeMessage: 'Message',
    });
});

//To get to a different page
app.get('/about', (req, res)=>{
    res.render('about.hbs', {
    	pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: 'Unable to get request'
    });
});

//Bind app to port on machine
app.listen(3000, ()=>{
	console.log('Server is up on port 3000');
});