import {FC, PropsWithChildren, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {authActions} from "../../store";
import {authService} from "../../services";

interface IProps extends PropsWithChildren {

}

const Authorization: FC<IProps> = ({children}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const guestUser = authService.getGuestUser();

    useEffect(() => {
        if (guestUser) {
            navigate("/user-info");
        } else {
            dispatch(authActions.resetError());
        }
    }, [guestUser])

    return (
        <>
            {children}
        </>
    );
};

export {Authorization};