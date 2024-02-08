import { useNavigate } from "react-router-dom";
import { IMovie } from "../models/IMovie";


interface ISearchResultProps {
    movies: IMovie[] | undefined ;
}


export const SearchResult = ({movies}: ISearchResultProps) => {
    const navigate = useNavigate();

    return <>
    <section id="movies">
        {movies?.map((movie) => (
            <div key={movie.imdbID} onClick={()=> {
                navigate ("/movie/" + movie.imdbID);
                }}>
                <h4>{movie.Title}</h4>
                <div className="img-container">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </div>
        ))
        }
    </section>
    </>
   
};