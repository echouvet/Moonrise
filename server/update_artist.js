function update(column, change, id) {
    if ((column == 'name' || column == 'location' || column == 'territory') && change.length > 250)
        res.json({error : "Name, Location, or Territory can not be over 250 characters :(" })
    else {
        var sql = 'UPDATE artists SET ' + column + ' = ? WHERE id = ?'
        con.query(sql, [change, id], function (err) { if (err) tools.error(err); })
        binary = 1;
    }
}

function updateimg(column, image, id) {
    if (image.size > 50000000)
        res.json({error : "First image is too big"})
    else
    {
        con.query('SELECT '+ column +' FROM artists WHERE id = ?', [id], (err, img) => {
             var oldpath = __dirname.replace("/server", "") +'/client/static' + img[0][column]
             if (!fs.existsSync(oldpath)){
                fs.unlinkSync(oldpath);
             }
        })
        var path =  __dirname.replace("/server", "") +'/client/static/img/'+id+'/'+image.name; 
        fs.readFile(image.path, (err, data) => { if (err) tools.error(err);
            fs.writeFile(path, data, (err) => { if (err) tools.error(err); })
        })
        var dbpath = '/img/'+id+'/'+image.name;
        con.query('UPDATE artists SET ' + column + ' = ? WHERE id = ?', [dbpath, id], 
            (err) => {if (err) tools.error(err); })
        binary = 1;
    }
}

var binary = 0;
var form = new formidable.IncomingForm();
form.parse(req, (err, field, files) => { if (err) tools.error(err);
    if (empty(field.id)) {res.json({error : "No Artist Selected"});}
    else{
        var id = eschtml(field.id)
        name = eschtml(field.name)
        description = eschtml(field.description)
        location = eschtml(field.location)
        territory = eschtml(field.territory)

        // slugify function from tools how to import and use ?
        

        if (!empty(files.img1))
            updateimg('img1', files.img1, id)
        if (!empty(files.img2))
            updateimg('img2', files.img2, id)
        if (!empty(name)) {
            update('name', name, id)
            const slug = tools.slugify(name)
            update('slug', slug, id)
        }
        if (!empty(description))
        {
            if (description.length > 65500)
                res.json({error : "Your Description is over 65,500 CHARACTERSSSSS wtf Nico xD message Eloi if you really want this" })
            else
                update('description', description, id)
        }
        if (!empty(location))
            update('location', location, id)
        if (!empty(territory))
            update('territory', territory, id)
        if (!empty(field.links))
        {
            var links = JSON.parse(field.links)
            con.query('DELETE FROM links WHERE artist_id = ?', [id], (err) => { if (err) tools.error(err);})
            links.forEach((el) => {
                if (!empty(el))
                {
                    var link_name = eschtml(el.link_name)
                    var link = eschtml(el.link)
                    con.query('INSERT INTO `links` (`artist_id`, `link`, `placeholder`) VALUES (?, ?, ?)', 
                        [id, link_name, link], (err) => { if (err) tools.error(err); })
                }
            })
        }
        if (binary = 1)
            res.json({success: true})
        else
            res.json({error: 'Nothing Was Updated'})
    }
})