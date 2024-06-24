import {useAppSelector} from "../../../hooks";
import css from "./GenreList.module.css";
import {Genre} from "../Genre/Genre.tsx";

const GenreList = () => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    const {genres} = useAppSelector(state => state.genres);

    return (
        <div className={css.wrap} id={isDarkMode ? 'bg_dark_genre' : 'bg_light_genre'}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre} isDarkMode={isDarkMode}/>)}
        </div>
    );
};

export {GenreList};