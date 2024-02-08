import { useState } from "react";
import { MovieSearchForm } from "../components/MovieSearchForm"
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import axios from "axios";
import { SearchResult } from "../components/SearchResult";

export const MovieSearchApp=()=>{
const [movies, setMovies] = useState<IMovie[]>(JSON.parse(localStorage.getItem("movies") || "[]"));

 const searchMovies = async (searchText: string) => {
   const response = await axios.get<IOmdbResponse>( "https://omdbapi.com/?apikey=416ed51a&s=" + searchText)
   setMovies(response.data.Search); 
   localStorage.setItem("movies", JSON.stringify(response.data.Search));

}


    return <>
   <MovieSearchForm search={searchMovies}/>

   <SearchResult movies={movies}/>

        </>
};