// Tasks
// Movie id
// Show id
// Search    ?query=${some title}

var movieData = require("../data/omdbData.js");
var request = require('request');

//Specify an error message outside of functions to use in all cases of a movie not found
var notFound = "I'm sorry, that movie was not found in the dataset.";


module.exports = function(app) {
//===================================================================
//Display all movies in the dataset
//===================================================================
	app.get("/api/all", function(req, res){
		res.json(movieData);
	});

//===================================================================
//Delete this function later, it is a temporary test
//===================================================================
	app.get("/api/omdbtest", function(req, res){
		console.log("request");
		console.log(req);
		request('http://www.omdbapi.com/?apikey=2dd7a1af&t=bladerunner', function(error, response, body){ 
			res.json(JSON.parse(body));
		});
	});

//===================================================================
//Find a movie from the movie's name passed into the request URL
//===================================================================
	app.get('/api/movie/title/:name', function(req, res){
		var name = req.params.name;
		var spacedName = "";
		let movieFound;

	//Iterate through all characters in the request paramter 'name' and change the plus signs into spaces
		for(let i = 0; i < name.length; i++){
			if(name[i] == "+"){
				spacedName += " ";
			}else{
				spacedName += name[i];
			}
		}

	//Iterate through all movies in the dataset and search for a matching title
		for(let i = 0; i < movieData.length; i++){
			if(spacedName == movieData[i].title.toLowerCase()){
				movieFound = movieData[i];
			}
		}

	//If the movie is not found return the 'not found' message
		if(movieFound == undefined){
			res.send(notFound);
		}else{
			res.json(movieFound);
		}
	});


//===================================================================
//Find a movie in the dataset by an id passed into the request URL
//===================================================================
	app.get('/api/movie/id/:id', function(req, res){
		var id = req.params.id;
		let movieFound;

		for(let i = 0; i < movieData.length; i++){
			if(id == movieData[i].id){
				movieFound = movieData[i];
			}
		}

		if(movieFound.type != "show"){
			movieFound = undefined;
		}

		if(movieFound == undefined){
			res.send(notFound);
		}else if(movieFound != undefined && movieFound.type == "movie"){
			res.json(movieFound);
		}

	});



//===================================================================
//Find a show in the dataset by an id passed into the request URL
//===================================================================
	app.get('/api/show/id/:id', function(req, res){
		var id = req.params.id;
		let showFound;

		for(let i = 0; i < movieData.length; i++){
			if(id == movieData[i].id){
				showFound = movieData[i];
			}
		}

		if(showFound.type != "show"){
			showFound = undefined;
		}

		if(showFound == undefined){
			res.send(notFound);
		}else if(showFound != undefined && showFound.type == "show"){
			res.json(showFound);
		}

	});



//===================================================================
//Search for a show or movie
//===================================================================
	app.get('/api/search', function(req, res){
		var searchTitle = req.query.title;
		var searchRank = req.query.rank;



		for(let i = 0; i < movieData.length; i++){


		}

		// res.send(searchTerm);

		res.send(searchRank);

	});
}






