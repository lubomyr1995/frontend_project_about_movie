import {Outlet} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {Header, ModalLoading, Spinner} from "../../components";
import css from "./MainLayout.module.css";

const MainLayout = () => {
    const {isDarkMode} = useAppSelector(state => state.trackState);
    return (
        <>
            <Header/>
            <ModalLoading><Spinner/></ModalLoading>
            <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'} className={css.wrap}>
                {/*{error.status ? <Error error={error}/> : <Outlet/>}*/}
                <Outlet/>
            </div>
        </>
    );
};

export {MainLayout};