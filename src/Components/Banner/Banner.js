import React, { useState,useEffect } from 'react'
import { imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'


import { originals } from '../../urls'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(originals).then((response)=>{
            let x = Math.floor((Math.random() * response.data.results.length) + 1);
            console.log(response.data.results[x]);
            setMovie(response.data.results[x])
        })
    }, [])
    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''}`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title:''}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <div className="description">{movie ? movie.overview:''}</div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner