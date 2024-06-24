import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {createSearchParams, NavLink, useNavigate} from 'react-router-dom';
import {AccountCircle, Favorite} from "@mui/icons-material";
import {IconButton, Switch} from "@mui/material";

import css from './Header.module.css';
import logo from "../../assets/main_logo.svg";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {trackActions} from "../../store";

const Header: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Search part
    type IFormInput = {
        name: string;
    };
    const {register, reset, handleSubmit} = useForm<IFormInput>();
    const searchHandler: SubmitHandler<IFormInput> = (data): void => {
        navigate({pathname: 'movies', search: createSearchParams({search: data.name}).toString()})
        reset()
    };


    return (
        <header id={isDarkMode ? 'bg_dark' : 'bg_light'} className={css.header}>
            <div className={css.logo}>
                <img onClick={() => navigate('')} src={logo} alt="logo"/>
            </div>
            <nav id={isDarkMode ? 'bar_dark' : 'bar_light'} className={css.navigations}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
            </nav>
            <form className={css.search_container} onSubmit={handleSubmit(searchHandler)}>
                <input className={css.search_input}
                       type="text"
                       placeholder="Search movies..."
                       {...register('name')}/>
                <button className={css.search_button}>Search</button>
            </form>
            <div>
                <Favorite onClick={() => navigate('favorites')}
                          sx={{
                              cursor: "pointer",
                              color: "red",
                              borderRadius: "50%",
                              border: "1px solid red",
                              padding: "2px"
                          }}
                />
            </div>
            <div>
                <Switch
                    color="default"
                    checked={isDarkMode}
                    onChange={() => dispatch(trackActions.setDarkMode())}
                    inputProps={{'aria-label': 'controlled'}}
                />

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => navigate('login')}
                    id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'}
                >
                    <AccountCircle/>
                </IconButton>

            </div>
        </header>
    );
};

export {Header};