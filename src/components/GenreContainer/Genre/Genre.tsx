import {FC} from "react";
import {NavLink} from "react-router-dom";

import {IGenre} from "../../../models";
import css from "./Genre.module.css";

interface IProps {
    genre: IGenre;
    isDarkMode: boolean;
}

const Genre: FC<IProps> = ({genre, isDarkMode}) => {
    return (
        <div id={isDarkMode ? 'genre_dark' : 'genre_light'}
             className={css.wrap_genre}>
            <NavLink to={genre.id.toString()}>
                <div>{genre.name}</div>
            </NavLink>

        </div>
    );
};

export {Genre};