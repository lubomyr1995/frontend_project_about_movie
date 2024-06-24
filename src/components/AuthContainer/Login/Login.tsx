import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from "./Login.module.css";
import {IAuth} from "../../../models";
import {Input, Button} from "../../UI";
import {useAppDispatch, useAppLocation, useAppSelector} from "../../../hooks";
import {authActions} from "../../../store";

const Login = () => {
    const {isDarkMode, error} = useAppSelector(state => state.trackState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {state} = useAppLocation();
    const {register, handleSubmit} = useForm<IAuth>();

    const handleAuth: SubmitHandler<IAuth> = async (user) => {
        console.log(user);
        // do some logic #
    };
    const handleAsGuest = async () => {
        const {meta: {requestStatus}} = await dispatch(authActions.loginAsGuest());
        if (requestStatus === "fulfilled") {
            navigate(state || '/user-info');
        }
    }

    return (
        <div className={css.login_container}>
            <form className={css.login} onSubmit={handleSubmit(handleAuth)}>
                <Input onFocus={() => dispatch(authActions.resetError())} id="username"
                       label="User" {...register("user")}/>
                <Input onFocus={() => dispatch(authActions.resetError())} type="password" id="password"
                       label="Password" {...register("password")}/>
                {error.status && <p className={css.error}>{error.message}</p>}
                <Button>Sign in</Button>
            </form>
            <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'}>
                <h5>
                    If you want to visit our website as a guest, just click below..
                </h5>
                <div className={css.other}>
                    <Button onClick={handleAsGuest}>Log in as a guest...</Button>
                    <b>or</b>
                    <Button onClick={() => navigate('/register')}>Sign up</Button>
                </div>
            </div>
        </div>
    );
};

export {Login};