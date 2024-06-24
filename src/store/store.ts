import {configureStore} from "@reduxjs/toolkit";

import {authReducer, genresReducer, moviesReducer, trackReducer} from "./slices";

const store = configureStore({
    reducer: {
        auth: authReducer,
        trackState: trackReducer,
        movies: moviesReducer,
        genres: genresReducer
    }
});

export {
    store
}