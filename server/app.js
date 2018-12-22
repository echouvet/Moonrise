const 	express = require('express')
const	http = require("http")
const	mysql = require('mysql')
const	fs = require('fs')
const cookieParser = require('cookie-parser')
const   bodyParser = require('body-parser')
const   formidable = require('formidable')
const 	cors = require('cors')
const	tools = require("./tools.js")
const	eschtml = require("escape-html")
const	empty = require("is-empty")
const 	bcrypt = require('bcrypt') 
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const	app = express()
const   server = http.createServer(app)

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'))
app.use(
	jwt({
	  secret: 'dummy'
	}).unless({
	  path: [
		{
			url: '/artists',
			methods: ['GET']
		},
		{
			url: /^\/artist\/.*/,
			methods: ['GET']
		},
		{
			url: '/login',
			methods: ['GET', 'POST']
		},
		{
			url: /^\/error\/.*/,
			methods: ['GET']
		},
	   ]
	})
  )


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root42"
})
con.connect((err) => { if (err) tools.error(err)
    eval(fs.readFileSync(__dirname + "/database.js")+'')
})


	// var pass = "admin"
	// var login = "admin"
	// bcrypt.hash(pass, 10, function(err, hash) { if (err) tools.error(err); 
	// 	sql = 'INSERT INTO `user` (`username`, `password`) VALUES (?, ?)'
	// 	con.query(sql, [login, hash], (err) => {if (err) tools.error(err);})
	// })


// Ports
server.listen(5050)

function mergelinks(artists, links){
	for (i = 0; i < artists.length; i++) {
		artists[i].links = new Array	
		for (j = 0; j < links.length; j++) {
			if (artists[i].id == links[j].artist_id) {
				artists[i].links.push(links[j])
			}
		}
	}
	return (artists)
}

app.get('/artists', (req,res) => {
	con.query("SELECT * FROM artists", (err, artists) => { if (err) tools.error(err);
		con.query("SELECT * FROM links", (err, links) => { if (err) tools.error(err);
			var data = mergelinks(artists, links)
			res.json(JSON.stringify(tools.shuffle(data)))
		})
	})
})
.get('/artist/:slug', (req,res) => {
	var artist = eschtml(req.params.slug)
	   con.query("SELECT * FROM artists WHERE slug = ?", [artist], (err, response) => { if (err) tools.error(err);
    	con.query("SELECT * FROM links WHERE artist_id = ?", [response[0].id], 
    		(err, links) => { if (err) tools.error(err);
			else
			{
				response[0].links = new Array
				response[0].links = links
				res.json(response[0])
			}
    	})
	})
})
.get('/error/:data', (req,res)  => {
    tools.error(req.params.data);
})
.post('/login', (req,res)  => {
	if (!empty(req.body) && !empty(req.body.username) && !empty(req.body.password))
	{
		username = eschtml(req.body.username)
		password = eschtml(req.body.password)
		con.query('SELECT * FROM user', (err, users) => { if (err) tools.error(err);
			if (users.length === 0)
			{
				 tools.error("NO USERS IN DB MESSAGE ELOI")
				res.json({error: 'No users in db'})
			}
			else
			{
				var user = users.find((user) => { return user.username === username })
				if (empty(user))
					res.json({error: 'Wrong Username'})
				else
				{
					bcrypt.compare(password, user.password, (err, result) => {
						if (result) {
							const accessToken = jsonwebtoken.sign({ username }, 'dummy', { expiresIn: 60 * 60 * 24 })
							  res.json({
								token: {
								  accessToken
								}
							})
						} else {
							res.json({error: `Wrong`}) 
						}
					})
				}
			}
		})
	}
	else
		res.json({error: 'Empty Field'})
})
.post('/moonrise/delete', (req,res) => {
	eval(fs.readFileSync(__dirname + "/delete_artist.js")+'')
})
.post('/moonrise/create', (req,res) => {
	eval(fs.readFileSync(__dirname + "/create_artist.js")+'')
})
.post('/moonrise/update', (req,res) => {
	eval(fs.readFileSync(__dirname + "/update_artist.js")+'')
})
