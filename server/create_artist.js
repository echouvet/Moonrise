var form = new formidable.IncomingForm();


form.parse(req, function (err, field, files) { if err tools.error(err);
	else {
		// Security
		var	name = eschtml(field.name)
	    description = eschtml(field.description)
	    location = eschtml(field.location)
	    territory = eschtml(field.territory)
		links = eschtml(field.links)
		// Errors
		if (empty(files.img1))
			res.json({error : "Missing First Image"})
		else if (files.img1.size > 50000000)
			res.json({error : "First image is too big"})
		else if (empty(files.img2))
			res.json({error : "Missing second Image"})
		else if (files.img2.size > 50000000)
			res.json({error : "Second image is too big"})
		else if (empty(field.name))
			res.json({error : "Missing Name" })
		else if (empty(field.description))
			res.json({error : "Missing Description" })
		else if (empty(field.location))
			res.json({error : "Missing Location" })
		else if (empty(field.territory))
			res.json({error : "Missing Territory" })
		else if (empty(field.links))
			res.json({error : "Missing Links" })
		else
		{
		// Database Input
			// maybe create an image directory per artist? fs.mkdir
		   	var img1_path = __dirname + "je le met ou 1" // ICI FAUDRA MODIFIER
		    fs.readFile(files.img1.path, (err, data) => { if (err) tools.error(err);
		    	fs.writeFile(img1_path, data, (err) => { if (err) tools.error(err); }) 
			})
			var img2_path = __dirname + "je le met ou 2" // ICI FAUDRA MODIFIER
			fs.readFile(files.img2.path, (err, data) => { if (err) tools.error(err);
				fs.writeFile(img2_path, data, (err) => { if (err) tools.error(err); }) 
			})
		    var sql = 'INSERT INTO `artists` (`name`, `description`, `location`, `territory`, `links`, `img1`, `img2`) VALUES (?, ?, ?, ?, ?, ?, ?)';
		    con.query(sql, [name, description, location, territory, links, img1_path, img2_path], function (err, res) { if (err) tools.error(err); })
		    res.json({success: "Artist was successfully created !"})
		}
	}
})