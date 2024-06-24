import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {Error, ModalImage, MovieInfo} from "../../components";

const MovieInfoPage = () => {
    const {isDarkMode, error} = useAppSelector(state => state.trackState);
    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {movieId} = useParams<{ movieId: string }>();

    useEffect(() => {
        dispatch(moviesActions.getMovieDetails({movieId}))
    }, [dispatch, movieId]);

    return (
        <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}>
            {error.status && <Error error={error}/>}
            <ModalImage/>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};