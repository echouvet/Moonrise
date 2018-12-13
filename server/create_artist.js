var form = new formidable.IncomingForm();

form.parse(req, (err, field, files) => { if err tools.error(err);
	else {
		// Security
		var	name = eschtml(field.name)
	    description = eschtml(field.description)
	    location = eschtml(field.location)
	    territory = eschtml(field.territory)
		// Errors
		if (files.img1)
			res.json({error : "Missing First Image"})
		else if (files.img1.size > 50000000)
			res.json({error : "First image is too big"})
		else if (files.img2)
			res.json({error : "Missing second Image"})
		else if (files.img2.size > 50000000)
			res.json({error : "Second image is too big"})
		else if (field.name)
			res.json({error : "Missing Name" })
		else if (field.description)
			res.json({error : "Missing Description" })
		else if (field.location)
			res.json({error : "Missing Location" })
		else if (field.territory)
			res.json({error : "Missing Territory" })
		else if (field.links)
			res.json({error : "No Links" })
		else if (name.length > 250 || location.length > 250 || territory.length > 250)
			res.json({error : "Name, Location, or Territory are over 250 characters :(" })
		else if (description.length > 65500)
			res.json({error : "Your Description is over 65,500 CHARACTERSSSSS wtf Nico xD message Eloi if you really want this" })
		else
		{
			con.query("SELECT LAST_INSERT_ID() FROM artists", (err, id) => {
				var theid = id[0].id + 1;
				var dir =  '../'__dirname + '/client/assets/img/' + theid;
				if (!fs.existsSync(dir)){
	           		fs.mkdirSync(dir);
	        	}
	        	field.links.forEach((el) => {
					var link_name = eschtml(el.link_name)
					var link = eschtml(el.link)
					con.query('INSERT INTO `links` (`artist_id`, `link`, `placeholder`) VALUES (?, ?, ?)', [theid, link_name, link], 
						(err, res) => { if (err) tools.error(err); })
				})
			   	var img1_path = __dirname + dir + "/img1"
			    fs.readFile(files.img1.path, (err, data) => { if (err) tools.error(err);
			    	fs.writeFile(img1_path, data, (err) => { if (err) tools.error(err); })
				})
				var img2_path = __dirname + dir + "/img2"
				fs.readFile(files.img2.path, (err, data) => { if (err) tools.error(err);
					fs.writeFile(img2_path, data, (err) => { if (err) tools.error(err); })
				})
			    var sql = 'INSERT INTO `artists` (`name`, `description`, `location`, `territory`, `links`, `img1`, `img2`) VALUES (?, ?, ?, ?, ?, ?, ?)';
			    con.query(sql, [name, description, location, territory, links, img1_path, img2_path], 
			    	(err, res) => { if (err) tools.error(err); })
			    res.json({success: "Artist was successfully created !"})
			})
		}
	}
})