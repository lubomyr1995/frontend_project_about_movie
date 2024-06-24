import {IFilter} from "../../models";
import css from "./FilterPanel.module.css";
import {FilterBadge} from "../FilterBadge/FilterBadge.tsx";
import {useAppLocation} from "../../hooks";

const FilterPanel = () => {
    const location = useAppLocation();
    const high_rating: IFilter = {name: 'High Rating', key: 'sort_by', query: 'vote_count.desc'};
    const popular: IFilter = {name: 'Popular', key: 'sort_by', query: 'popularity.desc'};
    const top: IFilter = {name: 'Week in trend', key: 'sort_by', query: 'trend'};

    return (
        <div className={css.wrap}>
            <FilterBadge filter={high_rating}/>
            <FilterBadge filter={popular}/>
            {!location.pathname.startsWith('/genres') && <FilterBadge filter={top}/>}
        </div>
    );
};

export {FilterPanel};