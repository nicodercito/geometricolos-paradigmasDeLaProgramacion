const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

//connecting mongodb
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

//import routes
const indexRoutes = require('./routes/index')

//settings
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes);

//init Server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});