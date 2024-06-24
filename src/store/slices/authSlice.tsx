import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUser} from "../../models";
import {authService} from "../../services";

interface IState {
    currentUser: IUser | null;
    errorMessage: string;
}

const initialState: IState = {
    currentUser: null,
    errorMessage: ''
}
const loginAsGuest = createAsyncThunk<void, void>(
    'authSlice/loginAsGuest',
    async (_, thunkAPI) => {
        try {
            const {data} = await authService.loginAssGuest();
            authService.setGuestUser(data);
        } catch (e) {
            const error = e as AxiosError;
            authService.deleteGuestUser();
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        resetError: (state) => {
            state.errorMessage = '';
            state.currentUser = null;
        }
    }
});

const {reducer: authReducer, actions} = authSlice;

const authActions = {...actions, loginAsGuest};

export {
    authReducer,
    authActions
}