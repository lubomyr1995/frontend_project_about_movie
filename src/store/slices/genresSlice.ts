import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IGenreResponse} from "../../models";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[];
}

const initialState: IState = {
    genres: []
};
const getGenres = createAsyncThunk<IGenreResponse, null>(
    'genresSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll();
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
    }
});

const {reducer: genresReducer, actions} = genresSlice;
const genresActions = {...actions, getGenres}

export {
    genresReducer,
    genresActions
};