import {useSearchParams} from "react-router-dom";
import {Stack, Pagination} from "@mui/material";

import {useAppSelector} from "../../hooks";
import {LIMIT_PAGES} from "../../constants";

const Paginator = () => {
    const {total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    return (
        <Stack spacing={2}>
            <Pagination
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: "#002828",
                        borderColor: "#002828",
                        "&:hover": {
                            backgroundColor: "#d7fce1",
                        },
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                        backgroundColor: "rgb(119, 204, 196)",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#83e2a2",
                        },
                    },
                    "& .MuiPaginationItem-icon": {
                        color: "#002828",
                    },
                }}
                onChange={(_, num) => {
                    query.set('page', num.toString())
                    setQuery(query)

                }}
                page={Number(query.get('page'))}
                count={total_pages > LIMIT_PAGES + 1 ? LIMIT_PAGES : total_pages}
                variant="outlined"/>
        </Stack>
    );
};

export {Paginator};