import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4606882be56455abf5485c21adf285fb&language=en-US`)
                .then(res => res.json())
                .then(data => setMovieList(data.results))
        };
        getData();
    })

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie, key) => (
                        <Cards movie={movie} key={key} />
                    ))
                }
            </div>
        </div>
    )
};

export default MovieList;