import {FC, PropsWithChildren, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useAppLocation} from "../../hooks";
import {authService} from "../../services";

interface IProps extends PropsWithChildren {

}

const RequiredAuth: FC<IProps> = ({children}) => {
    const {pathname} = useAppLocation();
    const navigate = useNavigate();
    const guestUser = authService.getGuestUser();
    useEffect(() => {
        if (!guestUser) {
            navigate('/login', {state: pathname})

        }
    }, [guestUser]);
    return (
        <>
            {children}
        </>
    );
};

export {RequiredAuth};