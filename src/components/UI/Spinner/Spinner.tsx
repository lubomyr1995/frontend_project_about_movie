import {FC} from "react";
import {CircularProgress} from "@mui/material";

import css from './Spinner.module.css';

const Spinner: FC = () => {
    return (
        <div className={css.spinner}>
            <CircularProgress size={100} sx={{color: '#93f8b6', margin: "auto"}}/>
        </div>
    );
};

export {Spinner};