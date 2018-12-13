var form = new formidable.IncomingForm();

form.parse(req, (err, field) => { if (err) tools.error(err);
	else {
		if (empty(field.id))
			res.json({error : "No Artist Selected"})
		else {
			id = eschtml(field.id)
			con.query("SELECT * FROM artists WHERE id = ?", [id], (err, rows) => { if (err) tools.error(err); 
				if (empty(rows[0]))
					res.json({error : "Artist doesn't exist"})
				else
				{
					fs.unlinkSync(rows[0].img1);
					fs.unlinkSync(rows[0].img2);
					con.query("DELETE FROM artists WHERE id = ?", [id], (err) => { if (err) tools.error(err);
					else
						res.json({success: "Artist Successfully Deleted"});
					})
				}
			})
		}
	}
})