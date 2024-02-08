import { IMovie } from "./IMovie";

export interface IMovieExt extends IMovie {
    Actors: string;
    Directors: string;
    Plot: string;
}