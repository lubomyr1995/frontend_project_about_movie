import {IGenre} from "./IGenre.ts";

export interface IMovie {
    id?: number;
    backdrop_path?: string;
    genres?: IGenre[];
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    vote_average?: number
}