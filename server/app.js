const 	express = require('express')
const	http = require("http")
const	mysql = require('mysql')
const	fs = require('fs')
const cookieParser = require('cookie-parser')
const   bodyParser = require('body-parser')
const   formidable = require('formidable')
const 	cors = require('cors')
const	tools = require("./tools.js")
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
	  secret: '0evuaIpzxZDOwSB4x61fEzfT8LA162ABBkUeUtGvT7Qp8TN1W1o6UEG+vy49Av'
	}).unless({
	  path: [
		{
			url: '/api/artists',
			methods: ['GET']
		},
		{
			url: /^\/api\/artist\/.*/,
			methods: ['GET']
		},
		{
			url: '/api/login',
			methods: ['GET', 'POST']
		},
		{
			url: /^\/api\/error\/.*/,
			methods: ['GET']
		},
	   ]
	})
  )



var con = mysql.createConnection({
    host: "localhost",
    user: "monty",
    password: "some_pass"
})
con.connect((err) => { if (err) tools.error(err)
    eval(fs.readFileSync(__dirname + "/database.js")+'')
})


	// var login = "root"
	// var pass = "root42"
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

app.get('/api/artists', (req,res) => {
	con.query("SELECT * FROM artists ORDER BY name", (err, artists) => { if (err) tools.error(err);
		con.query("SELECT * FROM links", (err, links) => { if (err) tools.error(err);
			var data = mergelinks(artists, links)
			res.json(JSON.stringify(tools.shuffle(data)))
		})
	})
})
.get('/api/artist/:slug', (req,res) => {
	var artist = req.params.slug
	   con.query("SELECT * FROM artists WHERE slug = ?", [artist], (err, response) => { if (err) tools.error(err);
		if (response.length  !== 0)
		{
			con.query("SELECT * FROM links WHERE artist_id = ?", [response[0].id], 
    		(err, links) => { if (err) tools.error(err);
				else
				{
					response[0].links = new Array
					response[0].links = links
					res.json(response[0])
				}
    		})
		}
		else
			res.json({error: 1})
	})
})
.get('/api/error/:data', (req,res)  => {
    tools.error(req.params.data);
})
.post('/api/login', (req,res)  => {
	if (!empty(req.body) && !empty(req.body.username) && !empty(req.body.password))
	{
		username = req.body.username
		password = req.body.password
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
							const accessToken = jsonwebtoken.sign({ username }, '0evuaIpzxZDOwSB4x61fEzfT8LA162ABBkUeUtGvT7Qp8TN1W1o6UEG+vy49Av', { expiresIn: 60 * 60 * 24 })
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
.post('/api/moonrise/delete', (req,res) => {
	eval(fs.readFileSync(__dirname + "/delete_artist.js")+'')
})
.post('/api/moonrise/create', (req,res) => {
	eval(fs.readFileSync(__dirname + "/create_artist.js")+'')
})
.post('/api/moonrise/update', (req,res) => {
	eval(fs.readFileSync(__dirname + "/update_artist.js")+'')
})

console.log("running");
