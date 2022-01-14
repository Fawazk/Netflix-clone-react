import React, { useState,useEffect } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState()
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err => {
            // some error handling
          });
        
    }, [])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie = (id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log("Movie Trailer ID :",response.data.results[0]);
              if(response.data.results.length!==0){
                  setUrlId(response.data.results[0])
              }else{
                  console.log("Array Empty");
              }
          })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>
                        <div className="cursor">
                            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                        </div>
                           )
                }
            </div>
            
           {urlId && <Youtube  videoId={urlId.key} opts={opts}  />} 
            
        </div>
    )
}

export default RowPost