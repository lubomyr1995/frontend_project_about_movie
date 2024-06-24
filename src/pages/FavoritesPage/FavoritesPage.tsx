import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../store";
import css from "./FavoritePage.module.css";
import {MovieCard} from "../../components";
import {favoriteService} from "../../services";

const FavoritesPage = () => {
    const {genres} = useAppSelector(state => state.genres);
    const {trigger, isDarkMode} = useAppSelector(state => state.trackState);
    const dispatch = useAppDispatch()
    const favorites = favoriteService.getFavorite();

    useEffect(() => {
        dispatch(genresActions.getGenres());
    }, [dispatch, trigger]);

    return (
        <div className={css.wrap_movie_card}>
            {favorites.length > 0 ?
                favorites.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres}/>)
                :
                <p id={isDarkMode ? 'text_color_dark' : 'text_color_light'} className={css.content}>
                    You don't have any favorite movies yet....
                </p>}
        </div>
    );
};

export {FavoritesPage};