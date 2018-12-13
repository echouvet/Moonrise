const 	express = require('express')
const	http = require("http")
const	mysql = require('mysql')
const	fs = require('fs')
const   bodyParser = require('body-parser')
const   formidable = require('formidable')
const 	cors = require('cors')
const	tools = require("./tools.js")
const	eschtml = require("escape-html")
const	empty = require("is-empty")

const	app = express()
const   server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root42"
})
con.connect((err) => { if (err) tools.error(err)
    eval(fs.readFileSync(__dirname + "/database.js")+'')
})

// Ports
server.listen(4000)
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})
.post('/artist/delete', (req,res) => {
	eval(fs.readFileSync(__dirname + "/delete_artist.js")+'')
})
.post('/artist/create', (req,res) => {
	eval(fs.readFileSync(__dirname + "/create_artist.js")+'')
})
.post('/artist/update', (req,res) => {
	eval(fs.readFileSync(__dirname + "/update_artist.js")+'')
})
.get('/artists', (req,res) => {
	con.query("SELECT * FROM artists", (err, response) => { if (err) tools.error(err);
		res.json(JSON.stringify(response)) // la liste de tout les artists a t'envoyer
	})
})
.get('/artist/:data', (req,res) => {
	var artist = eschtml(req.params.data)
    con.query("SELECT * FROM artists WHERE name = ?", [artist], (err, response) => { if (err) tools.error(err);
    	res.json(response[0]) // toutes les infos l'artist demander
	})
})
.get('/error/:data', (req,res)  => {
    tools.error(req.params.data);
})
.all('*', (req,res) => {
    res.json({error: '404 not found'})
})