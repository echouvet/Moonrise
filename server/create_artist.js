var form = new formidable.IncomingForm();

form.parse(req, (err, field, files) => { if (err) tools.error(err);
	else {
		// Security
		var	name = eschtml(field.name)
	    description = eschtml(field.description)
	    location = eschtml(field.location)
		territory = eschtml(field.territory)
		labels = eschtml(field.labels)
		soundcloud = eschtml(field.soundcloud)
		
		//Errors
		if (empty(files.img1))
			res.json({error : "Missing First Image"})
		else if (files.img1.size > 5000000000)
			res.json({error : "First image is too big"})
		else if (empty(files.img2))
			res.json({error : "Missing second Image"})
		else if (files.img2.size > 5000000000)
			res.json({error : "Second image is too big"})
		else if (empty(name))
			res.json({error : "Missing Name" })
		else if (empty(description))
			res.json({error : "Missing Description" })
		else if (empty(location))
			res.json({error : "Missing Location" })
		else if (empty(labels))
			res.json({error : "Missing Labels" })
		else if (empty(soundcloud))
			res.json({error : "Missing Soundcloud" })
		else if (empty(territory))
			res.json({error : "Missing Territory" })
		else if (empty(field.links))
			res.json({error : "No Links" })
		else if (name.length > 250 || location.length > 250 || territory.length > 250 || labels.length > 250 || soundcloud.length > 250)
			res.json({error : "Name, Location, Labels, or Territory are over 250 characters :(" })
		else if (description.length > 65500)
			res.json({error : "Your Description is over 65,500 CHARACTERSSSSS wtf Nico xD message Eloi if you really want this" })
		else
		{

			const slug = tools.slugify(name)
		    var sql = 'INSERT INTO `artists` (`name`, `slug`, `description`, `location`, `territory`, `labels`, `soundcloud`) VALUES (?, ?, ?, ?, ?, ?, ?)';
		    con.query(sql, [name, slug, description, location, territory, labels, soundcloud], 
		    	(err, result) => { if (err) tools.error(err); 
				var dir =  __dirname.replace("/server", "") + '/client/static/img/' + result.insertId
				if (!fs.existsSync(dir)){
	           		fs.mkdirSync(dir);
	        	}
	        	var links = JSON.parse(field.links)
	        	links.forEach((el) => {
					var link_name = eschtml(el.link)
					var link = eschtml(el.placeholder)
					con.query('INSERT INTO `links` (`artist_id`, `link`, `placeholder`) VALUES (?, ?, ?)', [result.insertId, link_name, link], 
						(err) => { if (err) tools.error(err); })
				})
				var img1_path = dir + '/' + files.img1.name
				var img2_path = dir + '/' + files.img2.name
				 fs.readFile(files.img1.path, (err, data) => { if (err) tools.error(err);
			    	fs.writeFile(img1_path, data, (err) => { if (err) tools.error(err); })
				})
				fs.readFile(files.img2.path, (err, data) => { if (err) tools.error(err);
					fs.writeFile(img2_path, data, (err) => { if (err) tools.error(err); })
				})
				var staticdir = "/img/" + result.insertId
				img1 = staticdir + '/' + files.img1.name
				img2 = staticdir + '/' + files.img2.name
				con.query('UPDATE artists SET img1 = ?, img2 = ? WHERE id = ?', [img1, img2, result.insertId], 
					(err) => {if (err) tools.error(err); })
			})
		    res.json({success: true})
		 }
	}
})
