// Modules
var express = require('express')
	expressVue = require("express-vue")
	http = require("http")
	mysql = require('mysql')
	fs = require('fs')
	path = require('path');

// Setup
var	app = express()
    server = http.createServer(app)

app.use(express.static(__dirname + '/resources'))
    
const expressVueMiddleware = expressVue.init();
app.use(expressVueMiddleware);


app.use('/resources', express.static(path.join(__dirname, 'resources')));
// not sure if this is needed for forms : 
// app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', __dirname + '/views');
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
    const data = {
        otherData: 'Something Else'
    };
    req.vueOptions = {
        head: {
            title: 'Page Title',
            metas: [
                { property:'og:title', content: 'Page Title'},
                { name:'twitter:title', content: 'Page Title'},
            ]
        }    
    }
    res.renderVue('views/index.vue', data, req.vueOptions);
})
.get('*', (req,res) => {
    const data = {
        otherData: 'Something Else'
    };
    req.vueOptions = {
        head: {
            title: 'Page Title',
            metas: [
                { property:'og:title', content: 'Page Title'},
                { name:'twitter:title', content: 'Page Title'},
            ]
        }    
    }
    res.renderVue('index.vue', data, req.vueOptions);
})