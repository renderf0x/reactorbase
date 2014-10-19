//init config

var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var hbs = require('hbs');

var Hacker = require('./models/hacker');

var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev')); //logging

//templating
app.set('view engine', 'html');
app.engine('html', hbs.__express);
hbs.registerPartials(__dirname + '/views/partials');

//db config
var config = require('./config'); //grabs db path from external file
mongoose.connect(config.db_url);

require('./js/passport.js')(passport);

//passport stuffies
app.use(session({secret: 'ilovetohackhackhack'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routing

//app.use(express.static(__dirname));
app.use('/css',express.static(__dirname + '/css'));
app.use('/img',express.static(__dirname + '/img'));
app.use('/js',express.static(__dirname + '/js'));

var router = require('./routes');

app.use('/', router);

app.listen(process.env.PORT || 3000);

//uncomment for loading new data from data.js
/*
var hackerImport = require('./import/hacker_import');

hackerImport.loadHackerArray(hackerImport.data);
*/