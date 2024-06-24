import {FC} from "react";
import {Link} from "react-router-dom";
import {Badge} from "@mui/material";

import {IGenre} from "../../../models";
import {useAppSelector} from "../../../hooks";
import css from "./GenreBadge.module.css";

interface IProps {
    badge: IGenre
}

const GenreBadge: FC<IProps> = ({badge}) => {
    const {id, name} = badge;
    const {isDarkMode} = useAppSelector(state => state.trackState);
    return (
        <Badge>
            <Link className={css.badge_link} id={isDarkMode ? 'bg_dark_badge' : 'bg_light_badge'} to={'/genres/' + id}>
                {name}
            </Link>
        </Badge>
    );
};

export {GenreBadge};