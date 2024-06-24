import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IInfo, IMovie, IMovieResponse} from "../../models";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    movie: IInfo | null;
    page: number;
    total_pages: number;
}

const initialState: IState = {
    movies: [],
    movie: null,
    page: 1,
    total_pages: 1
};
// Thunk for receiving all movies
const getMovies = createAsyncThunk<IMovieResponse, { page: string, with_genres?: string, sort_by?: string }>(
    'moviesSlice/getMovies',
    async ({page, with_genres, sort_by}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page, with_genres, sort_by);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

// Thunk for receiving movie details
const getMovieDetails = createAsyncThunk<IInfo, { movieId: string }>(
    'moviesSlice/getMovieDetails',
    async ({movieId}, thunkAPI) => {
        try {
            const {data} = await movieService.getById(movieId);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Thunk for searching movies
const getMoviesFromSearch = createAsyncThunk<IMovieResponse, { page: string, query: string }>(
    'moviesSlice/getMoviesFromSearch',
    async ({page, query}, thunkAPI) => {
        try {
            const {data} = await movieService.getSearchMovies(page, query);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// Thunk for trending movies
const getTrendingMovies = createAsyncThunk<IMovieResponse, { page: string }>(
    'moviesSlice/getTopMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getTrendingMovies(page);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // Movies builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {results, total_pages, page} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.page = page;
            })
            // Movie detail builder
            .addCase(getMovieDetails.pending, state => {
                state.movie = null;
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            // Movie search builder
            .addCase(getMoviesFromSearch.fulfilled, (state, action) => {
                const {results, total_pages, page} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.page = page;
            })
            // Movies trend builder
            .addCase(getTrendingMovies.fulfilled, (state, action) => {
                const {results, total_pages, page} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.page = page;
            })
    }
});

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {...actions, getMovies, getMovieDetails, getMoviesFromSearch, getTrendingMovies};

export {
    moviesReducer,
    moviesActions
}