import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

import css from "./Error.module.css";
import {IError} from "../../models";

interface IProps {
    error: IError;
}

const Error: FC<IProps> = ({error}) => {
    const navigate = useNavigate();
    const errorHandler = (): void => {
        alert('Please try again a bit later! Or reload this page.')
        navigate('/');
        window.location.reload();
        console.log(error);
    }
    return (
        <div className={css.error}>
            <h4>{error.message}</h4>
            <Button onClick={errorHandler} variant="outlined" color="error">
                error
            </Button>
        </div>
    );
};

export {Error}