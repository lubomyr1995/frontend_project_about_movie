import {FC, PropsWithChildren, useEffect} from "react";

import {useAppSelector} from "../../../hooks";
import css from "./ModalLoading.module.css";


interface IProps extends PropsWithChildren {

}

const ModalLoading: FC<IProps> = ({children}) => {
    const {isLoading} = useAppSelector(state => state.trackState);
    useEffect(() => {
        if (isLoading) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [isLoading]);

    const modalClass = isLoading ? `${css.show} ${css.modal}` : css.modal;

    return (
        <div className={modalClass}>
            <div>
                {children}
            </div>
        </div>
    );
};

export {ModalLoading};