import {apiService} from "./api.service.ts";
import {urls} from "../constants";
import {IResponse} from "../types";
import {IInfo, IMovieResponse} from "../models";

const movieService = {
    getAll: (page: string = '1', with_genres?: string, sort_by?: string): IResponse<IMovieResponse> =>
        apiService.get(urls.movies, {params: {page, with_genres, sort_by}}),
    getById: (movieId: string): IResponse<IInfo> =>
        apiService.get(`${urls.movie}/${movieId}`, {params: {append_to_response: 'videos,images'}}),
    getSearchMovies: (page: string, query: string): IResponse<IMovieResponse> =>
        apiService.get(urls.search, {params: {page, query}}),
    getTrendingMovies: (page: string = '1'): IResponse<IMovieResponse> =>
        apiService.get(urls.trendingByWeek, {params: {page}})
};

export {
    movieService
}