import { IMovie } from "../models/IMovie";

interface ISearchResultProps {
    movies: IMovie[] | undefined ;
}


export const SeacrhResult = ({movies}: ISearchResultProps) => {

    return <>
    <section>
        {movies?.map((movie) => (
            <div key={movie.imdbID}>
                <h4>{movie.Title}</h4>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </div>
        ))
        }
    </section>
    </>
   
};