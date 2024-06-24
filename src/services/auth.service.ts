import {IResponse} from "../types";
import {apiService} from "./api.service.ts";
import {urls} from "../constants";
import {IGuestUser} from "../models";

const GUEST_USER = 'guest';
const authService = {
    loginAssGuest: (): IResponse<IGuestUser> => apiService.get(urls.authAsGuest),
    setGuestUser: (user: IGuestUser): void => localStorage.setItem(GUEST_USER, JSON.stringify(user)),
    getGuestUser: (): IGuestUser => {
        const guest_user_str = localStorage.getItem(GUEST_USER);
        return guest_user_str ? JSON.parse(guest_user_str) : null;
    },
    deleteGuestUser: (): void => localStorage.removeItem(GUEST_USER)
}

export {
    authService
}