const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || ''
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || ''
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000'

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: REDIRECT_URI,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET
    })
    spotifyApi.authorizationCodeGrant(code)
    .then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(()=> {
        res.sendStatus(400)
    })
})