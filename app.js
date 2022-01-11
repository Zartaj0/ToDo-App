const express = require('express');
const ToDoController = require('./controllers/appControllers');


var app = express()


app.set('view engine', 'ejs');


app.use(express.static('./public'));
ToDoController(app);

app.listen(3000);
console.log('you are listening to port 3000');
