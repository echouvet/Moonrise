const  mailer = require("nodemailer")
const	eschtml = require("escape-html")
//https://nodemailer.com/about/
module.exports = {
	error: (msg) => {
		var message = eschtml(msg)
		console.log(message)
		return ;
		mailer.createTestAccount((err, account) => {
		let transporter = mailer.createTransport("SMTP", {
		        auth: {
		            user: account.user, // generated ethereal user
		            pass: account.pass // generated ethereal password
	        	}
		    })
		    var mail = {
	            from: "eloi-chouvet@moonrise-agency.com", 
	            to: "ehouvet@student.42.fr, nicolas@moonrise-agency.com",
	            subject: "YOUR WEBSITE HAS AN ERROR",
	            html: '<html><body><div align=center> \
	            Error Message : <BR />\
	            '+message+'<BR /><BR />\
	            Nicolas if you see this before I do and its not understandable, call me, something went wrong\
	            </div></body></html>'
	        }
	        transporter.sendMail(mail, function(error, info){
	        	if (error)
	        		console.log(error)
	        	transporter.close()
	    	})
		})
	}
};