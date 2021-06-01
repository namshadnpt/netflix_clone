import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constants'
import Youtube from 'react-youtube'
import "./Rowpost.css"

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [videoId, setvideoId] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err => {
            alert("Network Error")
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
            if(response.data.results.length !== 0){
                setvideoId(response.data.results[0].key)
            }else{
                console.log('Array Empty');
            }
        })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj, index) =>
                        <img onClick={()=>handleMovie(obj.id)} key={index} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl + obj.backdrop_path}`} alt="Poster" />
                    )
                }
            </div>
           { videoId && <Youtube opts={opts} videoId={videoId} /> }
        </div>
    )
}

export default Rowpost
