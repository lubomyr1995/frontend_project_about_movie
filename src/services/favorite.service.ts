import {IMovie} from "../models";

const FAVORITES = 'favorites';
const favoriteService = {
    getFavorite: (): IMovie[] => JSON.parse(localStorage.getItem(FAVORITES) || "[]"),
    updateFavorites: (updatedFavorites: IMovie[]): void => localStorage.setItem(FAVORITES, JSON.stringify(updatedFavorites)),
    deleteFavorites: (): void => localStorage.removeItem(FAVORITES)
};

export {
    favoriteService
}