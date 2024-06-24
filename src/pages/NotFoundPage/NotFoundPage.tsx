import {useAppSelector} from "../../hooks";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    return (
        <div className={css.wrap} id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}>
            <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'}>Not Found Page</div>
        </div>
    );
};

export {NotFoundPage};