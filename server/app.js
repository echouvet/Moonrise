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

// PUO CREE UN CMPTE
	// var pass = "admin"
	// var login = "admin"
	// bcrypt.hash(pass, 10, function(err, hash) { if (err) tools.error(err); 
	// 	sql = 'INSERT INTO `user` (`username`, `password`) VALUES (?, ?)'
	// 	con.query(sql, [login, hash], (err) => {if (err) tools.error(err);})
	// })


// Ports
server.listen(5050)

app.get('/artists', (req,res) => {

	con.query("SELECT * FROM artists", (err, response) => { if (err) tools.error(err);
		console.log(response)
		var data = response.forEach(el => {
			con.query("SELECT * FROM links WHERE artist_id = ?", [el.id], 
    			(err, links) => { if (err) tools.error(err);
    			else 
					el.links = links
					//console.log(el.links)
			}) 
		})
		data = tools.shuffle(response)
		res.json(JSON.stringify(data)) // la liste de tout les artists a t'envoyer
	})
})

app.get('/artist/:slug', (req,res) => {
	var artist = eschtml(req.params.slug)
    con.query("SELECT * FROM artists WHERE slug = ?", [artist], (err, response) => { if (err) tools.error(err);
    	con.query("SELECT * FROM links WHERE artist_id = ?", [artist.id], 
    		(err, links) => { if (err) tools.error(err);
			else
			{
				console.log(links)
				response[0].links = links
				res.json(response[0])
			}
    	})
	})
})

app.get('/error/:data', (req,res)  => {
    tools.error(req.params.data);
})

app.post('/login', (req,res)  => {
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
							const accessToken = jsonwebtoken.sign(
								{
								  username,
								  picture: 'https://github.com/nuxt.png',
								  name: 'User Nicholas',
								  scope: ['test', 'user']
								},
								'dummy'
							  )
							  res.json({
								token: {
								  accessToken
								}
							})
						} else {
							res.json({error: `Wrong`}) // change for the hackers
						}
					})
				}
			}
		})
	}
	else
		res.json({error: 'Empty Field'})
})

app.post('/moonrise/delete', (req,res) => {
	eval(fs.readFileSync(__dirname + "/delete_artist.js")+'')
})
app.post('/moonrise/create', (req,res) => {
	eval(fs.readFileSync(__dirname + "/create_artist.js")+'')
})
app.post('/moonrise/update', (req,res) => {
	eval(fs.readFileSync(__dirname + "/update_artist.js")+'')
})

