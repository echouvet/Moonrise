con.query('CREATE DATABASE IF NOT EXISTS `Moonrise`', (err) => { if (err) throw err;})
con.query('USE `Moonrise`', (err) => { if (err) throw err;})
var artists = `CREATE TABLE IF NOT EXISTS artists ( \
id INT AUTO_INCREMENT PRIMARY KEY, \
name VARCHAR(255), \
description TEXT, \
location VARCHAR(255), \
territory VARCHAR(255), \
img1 VARCHAR(255), \
img2 VARCHAR(255), \
links VARCHAR(255))`;
con.query(artists, (err) => { if (err) throw err;}) 