var form = new formidable.IncomingForm();

form.parse(req, (err, field) => { if (err) tools.error(err);
	else {
		if (empty(field.id))
			res.json({error : "No Artist Selected"})
		else {
			id = field.id
			con.query("SELECT * FROM artists WHERE id = ?", [id], (err, rows) => { if (err) tools.error(err); 
				if (empty(rows[0]))
					res.json({error : "Artist doesn't exist"})
				else
				{
					var dirpath = __dirname.replace("/server", "") +'/client/static/img/' + id
					var img1path = __dirname.replace("/server", "") +'/client/static' + rows[0].img1
					var img2path = __dirname.replace("/server", "") +'/client/static' + rows[0].img2
					if (fs.existsSync(img1path)){
						fs.unlinkSync(img1path)
					}
					if (fs.existsSync(img2path)){
						fs.unlinkSync(img2path)
					}
					if (fs.existsSync(dirpath)){
						fs.rmdirSync(dirpath)
					}
					con.query("DELETE FROM artists WHERE id = ?", [id], (err) => { if (err) tools.error(err);
					else
						res.json({success: "Artist Successfully Deleted"});
					})
				}
			})
		}
	}
})
