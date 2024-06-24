import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Card, CardContent, CardMedia, Rating, Stack} from "@mui/material";

import {useAppSelector} from "../../../hooks";
import {IGenre, IMovie} from "../../../models";
import {urls} from "../../../constants";
import {GenreBadge} from "../../GenreContainer";
import css from "./MovieCard.module.css";
import {FavoriteMovie} from "../../UI";

interface IProps {
    movie: IMovie;
    genres: IGenre[]
}

const MovieCard: FC<IProps> = ({movie, genres}) => {
    const {
        id,
        title,
        genre_ids,
        poster_path,
        release_date,
        vote_average
    } = movie;

    const badges = genre_ids?.map(genreId => genres?.find(el => el.id === genreId));
    const navigate = useNavigate();
    const {isDarkMode} = useAppSelector(state => state.trackState);

    const rating = useState<number | null>(Number(vote_average) / 2)[0];

    return (
        <Card className={css.wrap_card} id={isDarkMode ? 'bg_dark_card' : 'bg_light_card'}>
            <div className={css.favorite}>
                <FavoriteMovie movie={movie}/>
            </div>
            <CardMedia onClick={() => navigate(`/movies/${id}`)}
                       className={css.poster}
                       component="img"
                       alt={title}
                       image={poster_path ? urls.image + poster_path : '#'}
            />
            <CardContent>
                {badges && badges.map(badge => badge &&
                    <GenreBadge key={badge.id} badge={badge}/>)}
            </CardContent>
            <CardContent>
                <h3 onClick={() => navigate(`/movies/${id}`)}
                    className={css.title}>
                    {title}
                </h3>
                <p>
                    Release: {release_date}
                </p>
                <Stack spacing={1}>
                    <Rating
                        name="half-rating-read"
                        value={rating}
                        precision={0.5}
                        readOnly
                    />
                </Stack>
            </CardContent>
        </Card>
    );
};

export {MovieCard};