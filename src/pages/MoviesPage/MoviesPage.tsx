import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions, moviesActions} from "../../store";
import {Error, FilterPanel, MoviesList} from "../../components";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
    const {error, isDarkMode} = useAppSelector(state => state.trackState);
    const {movies} = useAppSelector(state => state.movies);
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const {genreId} = useParams<{ genreId?: string }>();
    const [queryParams] = useSearchParams({page: '1'});
    const page = queryParams.get('page');
    const search = queryParams.get('search');
    const sort_by = queryParams.get('sort_by');


    useEffect(() => {
        dispatch(genresActions.getGenres());
        if (search) {
            dispatch(moviesActions.getMoviesFromSearch({page, query: search}))
        } else if (sort_by === 'trend') {
            dispatch(moviesActions.getTrendingMovies({page}))
            return
        } else if (sort_by) {
            dispatch(moviesActions.getMovies({page, with_genres: genreId, sort_by: sort_by}))
        } else {
            dispatch(moviesActions.getMovies({page, with_genres: genreId}))
        }
    }, [dispatch, genreId, queryParams]);


    return (
        <div>
            {error.status && <Error error={error}/>}
            {!search && <FilterPanel/>}
            {search &&
                <div className={css.selected_topic} id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'}>
                    Result Searching: "{search}"
                </div>}
            {movies.length > 0 && genres.length > 0 && <MoviesList movies={movies} genres={genres}/>}
        </div>
    );
};

export {MoviesPage};