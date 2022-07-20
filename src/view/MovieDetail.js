import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesServices";

export const MovieDetail = () => {
    const { id } = useParams();

    console.log("ID: ", id);

    const [movie, setMovie] = useState({});
    const fetchMovie = async () => {
      const { data } = await MoviesService.getMoviesById(id);
      console.log("Retorno por id: ", data);
      setMovie(data);
    }
  
    useEffect(() => {
      fetchMovie();
    }, []);    

    return (
        <>
        <h1>{movie.title}</h1>
        <article>
            {movie.overview}
        </article>
        </>
    )
}