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
const 	jwt = require('jwt-simple');
const   ssn = require('express-session')
const   MemoryStore = require('session-memory-store')(ssn)
const 	bcrypt = require('bcrypt') 
const	app = express()
const   server = http.createServer(app)
const cookieParser = require('cookie-parser')


const sessionMiddleware = ssn({ 
	secret: "Eloi has a beautiful secret",
    store: new MemoryStore(),
    key: 'sid',
    resave: true, 
    saveUninitialized: true
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(sessionMiddleware);
app.use(cookieParser())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root42"
})
con.connect((err) => { if (err) tools.error(err)
    eval(fs.readFileSync(__dirname + "/database.js")+'')
})
var secret = Buffer.from('something weird that nobody will guess', 'hex');
// PUO CREE UN CMPTE
	// var pass = "admin"
	// var login = "admin"
	// bcrypt.hash(pass, 10, function(err, hash) { if (err) tools.error(err); 
	// 	sql = 'INSERT INTO `users` (`username`, `password`) VALUES (?, ?)'
	// 	con.query(sql, [login, hash], (err) => {if (err) tools.error(err);})
	// })


// Ports
server.listen(5050)
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})
.get('/artists', (req,res) => {
	con.query("SELECT * FROM artists", (err, response) => { if (err) tools.error(err);
		var data = response.forEach(el => {
			con.query("SELECT * FROM links WHERE artist_id = ?", [el.id], 
    			(err, links) => { if (err) tools.error(err);
    			else 
					el.links = links
			}) 
		})
		data = tools.shuffle(response)
		res.json(JSON.stringify(data)) // la liste de tout les artists a t'envoyer
	})
})
.get('/artist/:slug', (req,res) => {
	var artist = eschtml(req.params.slug)
    con.query("SELECT * FROM artists WHERE slug = ?", [artist], (err, response) => { if (err) tools.error(err);
    	con.query("SELECT * FROM links WHERE artist_id = ?", [artist.id], 
    		(err, links) => { if (err) tools.error(err);
			else
			{
				response[0].links = links
				res.json(response[0])
			}
    	})
	})
})
.get('/error/:data', (req,res)  => {
    tools.error(req.params.data);
})
.post('/logout', (req, res) => {
	req.session.destroy(); req.session = 0;
})
.post('/login', (req,res)  => {
	if (!empty(req.body) && !empty(req.body.username) && !empty(req.body.password))
	{
		username = eschtml(req.body.username)
		password = eschtml(req.body.password)
		con.query('SELECT * FROM users', (err, users) => { if (err) tools.error(err);
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
							var token = jwt.encode({eloi : 'nicolas'}, secret);
							res.json({token: {token} })
						} else {
							res.json({error: 'Wrong Password'}) // change for the hackers
						}
					})
				}
			}
		})
	}
	else
		res.json({error: 'Empty Field'})
})
.get('/user', (req, res) => {
	res.json({data: "Nicolas"})
})
// .use((req, res, next) =>{
// 	// console.log(req.headers.authorization)
// 	// console.log(req.headers.cookie)
// 	var decoded = jwt.decode("Le Token", secret);
// 	if (decoded.eloi === 'nicolas')
// 		next();
// 	else
// 		res.json({error: '404 not found'})
// })
.post('/artist/delete', (req,res) => {
	eval(fs.readFileSync(__dirname + "/delete_artist.js")+'')
})
.post('/artist/create', (req,res) => {
	eval(fs.readFileSync(__dirname + "/create_artist.js")+'')
})
.post('/artist/update', (req,res) => {
	eval(fs.readFileSync(__dirname + "/update_artist.js")+'')
})
.all('*', (req,res) => {
    res.json({error: '404 not found'})
})