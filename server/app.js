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

const	app = express()
const   server = http.createServer(app)


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



// con.query('USE `Moonrise`', (err) => {  if (err) tools.error(err);})

// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/crazy-p.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/eli-escobar.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/fred-everything.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/hot-toddy.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/jkriv.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/kon.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/labeuz.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/lay-far.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/lovebirds.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/luke-solomon.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/martin-hayes.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/moon-full-rise.png")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/moplen.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/qwestlife.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/rainer-trueby.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/razor-n-tape.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/ron-basejam.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/sleazy-beats-soundsystem.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/sleazy-mcqueen.jpg")', (err) =>{ if (err) throw err; })
// con.query('INSERT INTO `artists` (`name`, `img1`) VALUES ("David Dacruz", "/__nuxt/assets/img/wolf-music.jpg")', (err) =>{ if (err) throw err; })


// Ports
server.listen(4000)
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})

.get('/artists', (req,res) => {
	con.query("SELECT * FROM artists", (err, response) => { if (err) tools.error(err);
		// var data = response.forEach(el => {
			// con.query("SELECT * FROM links WHERE artist_id = ?", [el.id], 
   //  			(err, links) => { if (err) tools.error(err);
   //  			else 
			// 		el.links = links
			// }) 
		// })
		data = tools.shuffle(response)
		console.log(data)
		res.json(JSON.stringify(data)) // la liste de tout les artists a t'envoyer
	})
})
.get('/artist/:id', (req,res) => {
	var artist = eschtml(req.params.id)
    con.query("SELECT * FROM artists WHERE id = ?", [artist], (err, response) => { if (err) tools.error(err);
    	con.query("SELECT * FROM links WHERE artist_id = ?", [artist], 
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
.post('/register', (req,res)  => {
	pass = eschtml(req.body.pass)
	login = eschtml(req.body.login)
	bcrypt.hash(pass, 10, function(err, hash) { if (err) tools.error(err); 
		sql = 'INSERT INTO `users` (`username`, `password`) VALUES ("David Dacruz", "/__nuxt/assets/img/, ?)'
		con.query(sql, [login, pass], (err) => {if (err) tools.error(err);})
	})
})
.post('/login', (req,res)  => {
	if (req.body && req.body.login && req.body.password)
	{
		con.query('SELECT * FROM user', (err, user) => { if (err) tools.error(err);
			user.forEach(el => {
				if (el.login === eschtml(req.body.login))
				{
					bcrypt.compare(req.body.pass, el.pass, (err, final) => { if (err) tools.error(err);
						if (final === true)
						{
							var secret = Buffer.from('something weird that nobody will guess', 'hex');
							var token = jwt.encode({eloi : 'nicolas'}, secret);
							req.session.secret = secret;
							req.session.token = token;
							res.json({success: 'Logged in', token})
						}
						else
							res.json({error: 'Wrong Password'})
					})
				}
				else
					res.json({error: 'Wrong Login'})
			})
		})
	}
	else
		res.json({error: 'Empty Field'})
})
.use((req, res, next) =>{
	if (empty(req.session) || empty(req.session.secret) || empty(req.session.token))
		res.json({error: '404 not found'})
	else
		next();
})
.post('/verify', (req, res, next) => {
	if (req.body)
	{
		var decoded = jwt.decode(req.body.token, req.session.secret);
		if (decoded.eloi === 'nicolas' && req.body.token === req.session.token)
		{
			res.json({success: 'Logged In'})
			next();
		}
		else
			res.json({error: 'Not logged in'})
	}
	else
		res.json({error: '404 not found'})
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
.all('*', (req,res) => {
    res.json({error: '404 not found'})
})