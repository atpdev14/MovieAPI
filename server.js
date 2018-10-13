//Import dependencies and assign them to variables
var express = require("express");
var bodyParser = require("body-parser");

//Use an instance of express to create a server
var app = express();

//Assign the server to a local and live port
var PORT = process.env.PORT || 8080;

//Ensure that the express server is parsing responses and requests using body-parser module
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Import routing modules
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app); 


//Listen on a porter for server activity and notify user through the console that the server is active
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
