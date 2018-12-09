con.query('CREATE DATABASE IF NOT EXISTS `Moonrise`', (err) => { if (err) throw err;})
con.query('USE `Moonrise`', (err) => { if (err) throw err;})
var artists = `CREATE TABLE IF NOT EXISTS artists ( \
id INT AUTO_INCREMENT PRIMARY KEY, \
name VARCHAR(255) DEFAULT "none", \
description TEXT, \
img VARCHAR(255) DEFAULT "none", \
link1 VARCHAR(255) DEFAULT "none", \
link2 VARCHAR(255) DEFAULT "none", \
link3 VARCHAR(255) DEFAULT "none", \
link4 VARCHAR(255) DEFAULT "none", \
link5 VARCHAR(255) DEFAULT "none", \
link6 VARCHAR(255) DEFAULT "none" )`;
con.query(artists, (err) => { if (err) throw err;}) 
