require("dotenv").config();

var fs = require("fs");
var request = require("request");
const keys = require('./keys.js');
const axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


let action = process.argv[2];
let title = process.argv.slice(3).join(" ");

console.log(process.argv);

function liriSwitch(action, title) {
    switch (action) {
        case "concert-this":
            concertThis(title);
            break;
        case "movie-this":
            movieThis(title);
            break;
        case "spotify-this-song":
            spotifyThis(title);
            break;
        case "do-what-it-says":
            doWhatItSays(title);
            break;
        default:
            console.log("You can't do that!")
            break;
    }
};

function movieThis(search) {
    console.log("movieThis")
    if (name === "") {
        name = "Mr. Nobody";
    }

    var match = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    request(match, function (response) {
        console.log("The movie's title: " + response.data.title);
        console.log("The year of release: " + response.data.year);
        console.log("The country of movie: " + response.data.country);
        console.log("The movie's language: " + response.data.language);
        console.log("The movie's actors: " + response.data.actors);
        console.log("The movie's plot: " + response.data.plot);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("IMDB Rating: " + response.data.imdbRating);

    });
};

function concertThis(band) {
    axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log(response.data);
            console.log(response.data[0].venue.name);
            console.log("Date of event" + moment(response.data[0].datetime).format('MM/DD/YYYY'));
            console.log(response.data[0].venue.city);
        }
    );
};

function spotifyThis(song) {
    if (name === "") {
        name = "The Sign Ace of Base";
    }

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        var response = data.tracks.items;
        console.log("Artist: " + response.data[0].artists.name);
        console.log("Song: " + response.data[0].name);
        console.log("Preview url: " + response.data.preview_url);
        console.log("Album: " + response.data[0].album.name);

        console.log(data);
    });
};

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        action = data.split(",")[0].trim();
        title = data.split(",")[1].trim();
        liriSwitch(action);
    })
};

liriSwitch(action, title);


