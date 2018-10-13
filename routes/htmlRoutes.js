//NOT SURE IF THIS IS CORRECT PATH NEEDED
//REFER TO HOT RESTAURANT htmlRoutes.js file
//may be refering to html files
var path = require("./apiRoutes.js");

module.exports = function(app){
	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}


