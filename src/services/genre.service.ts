import {IResponse} from "../types";
import {IGenreResponse} from "../models";
import {apiService} from "./api.service.ts";
import {urls} from "../constants";

const genreService = {
    getAll: (): IResponse<IGenreResponse> => apiService.get(urls.genres)
}

export {
    genreService
}