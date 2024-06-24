import {Outlet} from "react-router-dom";

import css from "./GenrePage.module.css";
import {Error, GenreList} from "../../components";
import {useAppSelector} from "../../hooks";


const GenresPage = () => {
    const {error} = useAppSelector(state => state.trackState);

    return (
        <div className={css.wrap}>
            {error.status && <Error error={error}/>}
            <div className={css.wrap_outlet}><Outlet/></div>
            <div className={css.wrap_genre_list}><GenreList/></div>
        </div>
    );
};

export {GenresPage};