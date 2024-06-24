import {FC, useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Badge} from "@mui/material";

import {IFilter} from "../../models";
import {useAppSelector} from "../../hooks";
import css from "./FilterBadge.module.css";

interface IProps {
    filter: IFilter;
}

const FilterBadge: FC<IProps> = ({filter}) => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(searchParams.get(filter.key) === filter.query);
    }, [searchParams, filter]);

    const handleClick = (): void => {
        if (isActive) {
            searchParams.delete(filter.key);
        } else {
            searchParams.set(filter.key, filter.query);
        }
        setSearchParams(searchParams);
        setIsActive(!isActive);
    };

    return (
        <Badge>
            <button
                id={isDarkMode ? 'bg_dark_top_badge' : 'bg_light_top_badge'}
                className={`${css.badge} ${isActive ? css.active : ''}`}
                onClick={handleClick}
            >
                {filter.name}
            </button>
        </Badge>
    );
};

export {FilterBadge};