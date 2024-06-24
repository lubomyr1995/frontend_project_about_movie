import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from "./Register.module.css";
import {IAuth} from "../../../models";
import {registerValidator} from "../../../validators";
import {Input, Button} from "../../UI";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {authActions} from "../../../store";

const Register = () => {
    const {errorMessage} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors: formsError, isValid}} = useForm<IAuth>({
        mode: "onBlur",
        resolver: joiResolver(registerValidator)
    });
    const handleRegister: SubmitHandler<IAuth> = async (user) => {
        console.log(user);
        navigate('/login');
        // do some logic
    }
    return (
        <div className={css.reg_container}>
            <form className={css.reg} onSubmit={handleSubmit(handleRegister)}>
                <Input
                    onFocus={() => dispatch(authActions.resetError())}
                    id='user' label='User' {...register('user')}/>
                {formsError.user && <p>{formsError.user.message}</p>}

                <Input type='password' id='password' label='Password' {...register('password')}/>
                {formsError.password && <p>{formsError.password.message}</p>}

                <Input type='password' id='confirm_password' label='Password' {...register('confirm_password')}/>
                {formsError.confirm_password && <p>{formsError.confirm_password.message}</p>}

                {errorMessage && <p>{errorMessage}</p>}
                <Button disabled={!isValid}>Sign up</Button>
            </form>
            <Button onClick={() => navigate('/login')}>Sign in</Button>
        </div>
    );
};

export {Register};