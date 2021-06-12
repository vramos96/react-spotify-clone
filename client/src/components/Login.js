import React from 'react'
import {Container} from 'react-bootstrap-v5'

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || ''
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000'
const RESPONSE_TYPE = 'code'
const SCOPE = 'streaming user-read-email user-read-private '+
'user-library-read user-library-modify user-read-playback-state '+
'user-modify-playback-state'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=`+
`${encodeURIComponent(CLIENT_ID)}&response_type=${encodeURIComponent(RESPONSE_TYPE)}`+
`&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPE)}`
const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{minHeight:"100vh"}}>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
        </Container>
    )
}

export default Login
