con.query('CREATE DATABASE IF NOT EXISTS `Moonrise`', (err) => { if (err) throw err;})
con.query('USE `Moonrise`', (err) => {  if (err) tools.error(err);})
var artists = `CREATE TABLE IF NOT EXISTS artists ( \
id INT AUTO_INCREMENT PRIMARY KEY, \
name VARCHAR(255), \
description TEXT, \
location VARCHAR(255), \
territory VARCHAR(255), \
img1 VARCHAR(255), \
img2 VARCHAR(255) )`;
con.query(artists, (err) => {  if (err) tools.error(err);}) 

var links = `CREATE TABLE IF NOT EXISTS links ( \
id INT AUTO_INCREMENT PRIMARY KEY, \
artist_id INT, \
link TEXT, \
placeholder VARCHAR(255))`;
con.query(links, (err) => {  if (err) tools.error(err);}) 

var user = `CREATE TABLE IF NOT EXISTS user ( \
id INT AUTO_INCREMENT PRIMARY KEY, \
username VARCHAR(255), \
password VARCHAR(255))`;
con.query(user, (err) => {  if (err) tools.error(err);}) 

eval(fs.readFileSync(__dirname + "/seed.js")+'')

