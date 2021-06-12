import {useState, useEffect} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

const Player = ({accessToken, trackUri}) => {
    const [play, setPlay] = useState(false)
    useEffect(() => setPlay(true), [trackUri])
    return !accessToken ? null : (
        <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        play={play}
        callback={state => {
            if(!state.isPlaying)
            setPlay(false)
        }}
        uris={trackUri ? [trackUri] : []}
        />
    )
}

export default Player
