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

app.post('/artist/delete/:id', (req,res) => {
	if (isNaN(req.params.id))
		res.json({error : "id is not a number"})
	else {
		id = eschtml(req.params.id)
		con.query("SELECT (img1, img2) FROM artists WHERE id = ?", [id], (err, rows) => { if (err) tools.error(err); 
			if (rows.length == 0)
				res.json({error : "Artist doesn't exist"})
			else
			{
				fs.unlinkSync(img1);
				fs.unlinkSync(img2);
				con.query("DELETE FROM artists WHERE id = ?", [id], (err) => { if (err) tools.error(err);
				else
					res.json({success: "Artist Successfully Deleted"});
				})
			}
		})
	}
})
.post('/artist/create', (req,res) => {
	eval(fs.readFileSync(__dirname + "/server/create_artist.js")+'') //ben va voir le code, je cree un artiste en gros. A revoir la gestion des links
})
.get('/artists', (req,res) => {
	con.query("SELECT (id, name, img1) FROM artists", (err, response) => { if (err) tools.error(err);
		res.json(artists) // la liste de tout les artists a t'envoyer
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