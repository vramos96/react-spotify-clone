# react-spotify-clone

This is my approach for the tutorial at [this video](https://youtu.be/Xcet6msf3eE). This project uses spotify's [developer API](https://developer.spotify.com/).

### Dependencies used in this project

Client side (created with create-react-app):

* [axios](https://www.npmjs.com/package/axios) used for executing local server requests
* [bootstrap@5.0.0-alpha3](https://www.npmjs.com/package/bootstrap/v/5.0.0-alpha3) used for styling
* [react-bootstrap-v5](https://www.npmjs.com/package/react-bootstrap-v5) used for styling
* [react-spotify-web-playback](https://www.npmjs.com/package/react-spotify-web-playback) used for playback service
* [spotify-web-api-node](https://www.npmjs.com/package/spotify-web-api-node) used for retrieving spotify token

Server side:

* [body-parser](https://www.npmjs.com/package/body-parser) used for parsing JSON requests
* [cors](https://www.npmjs.com/package/cors) used for removing CORS policy restrictions for server requests
* [dotenv](https://www.npmjs.com/package/dotenv) used for stroring spotify's client keys server-side
* [express](https://www.npmjs.com/package/express) node server used by the client
* [lyrics-finder](https://www.npmjs.com/package/lyrics-finder) used for displaying the selected song's lyrics
* [nodemon](https://www.npmjs.com/package/nodemon) used for development environment, restarts the server on server.js file change 
* [spotify-web-api-node](https://www.npmjs.com/package/spotify-web-api-node) used for spotify authorization and for token refresh

### Environment variables

Please create a .env file under /client and /server directories. Content should match both files.
For an example check .env.example file.

* REACT_APP_SPOTIFY_CLIENT_ID (Your app generated client id)
* REACT_APP_SPOTIFY_CLIENT_SECRET (Your app generated client secret)
* REACT_APP_SPOTIFY_REDIRECT_URI (This redirect URI should match with your app)

### Development Usage

Under /server directory run "npm run devStart", this will start nodemon (port 3001).
Under /client directory run "npm start", this will run react's start script (port 3000).