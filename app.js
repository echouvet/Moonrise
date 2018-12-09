// Modules
const express = require('express')
const	expressVue = require("express-vue")
const	http = require("http")
const	mysql = require('mysql')
const	fs = require('fs')
const	path = require('path');
const   bodyParser = require('body-parser')

// App Setup
const	app = express()
const   server = http.createServer(app)
const   expressVueMiddleware = expressVue.init();

app.use(expressVueMiddleware);
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/resources', express.static(path.join(__dirname, 'resources')));

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'vue');

// Database Setup
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root42"
})
con.connect((err) => { if (err) throw err //going to need to set up an e-mail notification for errors
    eval(fs.readFileSync(__dirname + "/back/database.js")+'')
})

// Ports
server.listen(8080)

// Router  ---- rien ci ne marche XD
app.get('/', (req,res) => {
    res.renderVue('views/index.vue', {data: "data"}, req.vueOptions);
})
.get('*', (req,res) => {
    res.renderVue('index.vue', {data: "data"}, req.vueOptions);
})