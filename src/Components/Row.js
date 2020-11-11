import React, { useState, useEffect } from 'react'
import axios from '../axios';
import './Row.css'

const imgBaseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl }) {

    const [ movies, setMovies ] = useState([])

    useEffect( () => {
        async function fetchData () {
            const request = await axios.get(fetchUrl)
            const { results } = request.data;
            setMovies(results);
        }

        fetchData()
    }, [fetchUrl])
    
    console.log(movies)
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {/* {container with posters, etc} */}
                {movies.map( (movie) => {
                    return <img 
                            className='row-poster'
                            src={`${imgBaseUrl}${movie.poster_path}`} 
                            alt={movie.title} 
                            />
                })}

            </div>

        </div>
    )
}

export default Row
