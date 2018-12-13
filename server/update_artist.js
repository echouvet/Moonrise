function updateuser(column, change) {

    var sql = 'UPDATE users SET ' + column + ' = ? WHERE id = ?'
    con.query(sql, [change, req.session.profile.id], function (err) { if (err) res.redirect('/error/SQL error ' + err); })
    req.session.profile[column] = change;
    update = 1;
}
