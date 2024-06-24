import {FC, useState, useEffect} from "react";
import {FavoriteBorder, Favorite} from "@mui/icons-material";
import {IconButton} from "@mui/material";

import {IMovie} from "../../../models";
import {authService, favoriteService} from "../../../services";
import {useAppDispatch} from "../../../hooks";
import {trackActions} from "../../../store";

interface IProps {
    movie: IMovie;
}

const FavoriteMovie: FC<IProps> = ({movie}) => {
    const guestUser = authService.getGuestUser();
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useAppDispatch();

    // getting Movies.
    useEffect(() => {
        const favorites = favoriteService.getFavorite();
        setIsFavorite(favorites.some((fav: IMovie) => fav.id === movie.id));
        favorites.some((fav: IMovie) => fav.id === movie.id)
    }, [dispatch, movie.id]);

    const toggleFavorite = () => {
        const favorites = favoriteService.getFavorite();

        if (isFavorite) {
            // delete
            const updatedFavorites = favorites.filter((fav: IMovie) => fav.id !== movie.id);
            favoriteService.updateFavorites(updatedFavorites);
        } else {
            // add
            const updatedFavorites = [...favorites, movie];
            favoriteService.updateFavorites(updatedFavorites);
        }

        setIsFavorite(!isFavorite);
        dispatch(trackActions.setTrigger())
    };

    return (
        <>
            {guestUser && <IconButton onClick={toggleFavorite}>
                {isFavorite ? (
                    <Favorite sx={{color: "red"}}/>
                ) : (
                    <FavoriteBorder sx={{color: "red"}}/>
                )}
            </IconButton>}
        </>

    );
};

export {FavoriteMovie};