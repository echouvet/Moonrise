const 	express = require('express')
const	http = require("http")
const	m0ysql = require('mysql')
const	fs = require('fs')
const   bodyParser = require('body-parser')
const   formidable = require('formidable')
const 	cors = require('cors')
const	tools = require("./tools.js")

const	app = express()
const   server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root42"
})
con.connect((err) => { if (err) tools.error(err)
    eval(fs.readFileSync(__dirname + "/server/database.js")+'')
})

// Ports
server.listen(4001)

app.get('/artist/delete/:id', (req,res) => {
	if (isNaN(req.params.id))
		res.json({error : "id is not a number"})
	con.query("DELETE FROM artists WHERE id = ?", [id], (err) => { if (err) tools.error(err);
		else
			res.json({success: "Artist Successfully Created"});})
	
})
.post('/artist/create'), (req,res) => {
	eval(fs.readFileSync(__dirname + "/server/create_artist.js")+'')
}
.get('/artists'), (req,res) => {
	con.query("SELECT (name, img1) FROM artists", (err, response) => { if (err) tools.error(err);
		res.json(artists) // la liste de tout les artists a t'envoyer
	})
}
.get('/artist/:data', (req,res) => {
	var artist = eschtml(req.params.data)
    con.query("SELECT * FROM artists WHERE name = ?", [artist], (err, response) => { if (err) tools.error(err);
    	res.json(response.rows) // toutes les infos l'artist demander
	})
})
.get('/error/:data', (req,res)  => {
    tools.error(req.params.data);
})
.all('*', (req,res) => {
    res.json({error: '404 not found'})
})