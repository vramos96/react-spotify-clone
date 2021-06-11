import React from 'react'
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || ''
const RESPONSE_TYPE = 'code'
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000'
const SCOPE = 'streaming user-read-email user-read-private '+
'user-library-read user-library-modify user-read-playback-state '+
'user-modify-playback-state'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=`+
`${encodeURIComponent(CLIENT_ID)}&response_type=${encodeURIComponent(RESPONSE_TYPE)}`+
`&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPE)}`
const Login = () => {
    return (
        <div>
            
        </div>
    )
}

export default Login
