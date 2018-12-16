# liri-node-app
Overview:
LIRI is an app like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Functionality:
LIRI will search OMDB for movies, Bands in town for concerts, and Spotify for songs.

Usage:
run with node.js: node liri <arg1> <arg2>

<arg1> can be:

movie-this:

searches for the <arg2> in OMDB API and renders the following information about each event to the terminal:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
and If there is no <arg2> then program will default to the movie 'Mr. Nobody.'

concert-this:

searches for the <arg2> in Bands in Town Artist Events API and renders the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (uses moment to format date as "MM/DD/YYYY")

spotify-this-song:

searches for the <arg2> in Bands in Town Artist Events API and renders the following information about each event to the terminal:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
and If there is no <arg2> then program will default to "The Sign" by Ace of Base.

do-what-it-says:

reads the random.txt and uses first string as <arg1> and second string (separated by ,) as <arg2>:

returns value depending on <arg1> and <arg2>.

Liri uses:

Node-Spotify-API,

Request,

Axios,

Moment,

DotEnv


Screenshots:
image1
image2
image3
image4