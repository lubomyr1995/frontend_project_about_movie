import {FC} from "react";
import {IGenre, IMovie} from "../../../models";

import css from "./MoviesList.module.css";
import {MovieCard} from "../MovieCard/MovieCard.tsx";
import {Paginator} from "../../Paginator/Paginator.tsx";

interface IProps {
    movies: IMovie[];
    genres: IGenre[];
}

const MoviesList: FC<IProps> = ({movies, genres}) => {
    return (
        <>
            <div className={css.wrap_movie_card}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres}/>)}
            </div>

            <div className={css.paginator}>
                <Paginator/>
            </div>

        </>
    );
};

export {MoviesList};