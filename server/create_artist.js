var form = new formidable.IncomingForm();
form.parse(req, (err, field, files) => { if (err) tools.error(err);
	else {
		// Security
		var	name = eschtml(field.name)
	    description = eschtml(field.description)
	    location = eschtml(field.location)
	    territory = eschtml(field.territory)
		// Errors
		if (empty(files.img1))
			res.json({error : "Missing First Image"})
		else if (files.img1.size > 50000000)
			res.json({error : "First image is too big"})
		else if (empty(files.img2))
			res.json({error : "Missing second Image"})
		else if (files.img2.size > 50000000)
			res.json({error : "Second image is too big"})
		else if (empty(name))
			res.json({error : "Missing Name" })
		else if (empty(description))
			res.json({error : "Missing Description" })
		else if (empty(location))
			res.json({error : "Missing Location" })
		else if (empty(territory))
			res.json({error : "Missing Territory" })
		else if (empty(field.links))
			res.json({error : "No Links" })
		else if (name.length > 250 || location.length > 250 || territory.length > 250)
			res.json({error : "Name, Location, or Territory are over 250 characters :(" })
		else if (description.length > 65500)
			res.json({error : "Your Description is over 65,500 CHARACTERSSSSS wtf Nico xD message Eloi if you really want this" })
		else
		{
		    var sql = 'INSERT INTO `artists` (`name`, `description`, `location`, `territory`) VALUES (?, ?, ?, ?)';
		    con.query(sql, [name, description, location, territory], 
		    	(err, result) => { if (err) tools.error(err); 
				var dir =  __dirname.replace("/server", "") + '/client/assets/img/' + result.insertId
				if (!fs.existsSync(dir)){
	           		fs.mkdirSync(dir);
	        	}
	        	var links = JSON.parse(field.links)
	        	links.forEach((el) => {
					var link_name = eschtml(el.link_name)
					var link = eschtml(el.link)
					con.query('INSERT INTO `links` (`artist_id`, `link`, `placeholder`) VALUES (?, ?, ?)', [result.insertId, link_name, link], 
						(err) => { if (err) tools.error(err); })
				})
				var img1_path = dir + "/img1.jpg"
				var img2_path = dir + "/img2.jpg"
				 fs.readFile(files.img1.path, (err, data) => { if (err) tools.error(err);
			    	fs.writeFile(img1_path, data, (err) => { if (err) tools.error(err); })
				})
				fs.readFile(files.img2.path, (err, data) => { if (err) tools.error(err);
					fs.writeFile(img2_path, data, (err) => { if (err) tools.error(err); })
				})
				dir = "/assets/img/" + result.insertId
				img1 = dir + "/img1.jpg"
				img2 = dir + "/img2.jpg"
				con.query('UPDATE artists SET img1 = ?, img2 = ? WHERE id = ?', [img1, img2, result.insertId], 
					(err) => {if (err) tools.error(err); })
			})
		    res.json({success: "Artist was successfully created !"})
		}
	}
})
