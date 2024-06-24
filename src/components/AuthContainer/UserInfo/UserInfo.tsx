import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../../hooks";
import css from "./UserInfo.module.css";
import {Button} from "../../UI";
import {authService, favoriteService} from "../../../services";

const UserInfo = () => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    const guestUser = authService.getGuestUser()
    const navigate = useNavigate();
    const handleClick = (): void => {
        authService.deleteGuestUser();
        favoriteService.deleteFavorites();
        navigate('/')
    };

    return (
        <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'} className={css.wrap}>
            {guestUser && <>
                <h2>Guest:</h2>
                <h3>Guest user: {guestUser.guest_session_id}</h3>
                <h3>Time expired: {guestUser.expires_at}</h3>
                <Button onClick={handleClick}>Log out</Button>
            </>}
        </div>
    );
};

export {UserInfo};