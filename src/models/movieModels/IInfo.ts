import {IGenre} from "./IGenre.ts";
import {IVideo} from "./IVideo.ts";
import {IImage} from "./IImage.ts";

export interface IInfo {
    id: number;
    adult: boolean;
    backdrop_path: string;
    budget: number;
    revenue: number;
    genres: IGenre[];
    homepage: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    videos: IVideo;
    images: IImage;
}