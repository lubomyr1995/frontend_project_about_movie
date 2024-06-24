import {createSlice, isFulfilled, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";

import {IError} from "../../models";

interface IState {
    isLoading: boolean;
    isDarkMode: boolean;
    error: IError
    activeRequests: number;
    modelImage: boolean;
    trigger: boolean;

}

const initialState: IState = {
    isLoading: false,
    isDarkMode: true,
    error: {
        message: "An unexpected error occurred!",
        status: false
    },
    activeRequests: 0,
    modelImage: false,
    trigger: false
};

const trackSlice = createSlice({
    name: 'trackSlice',
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setModelImage: (state, action: PayloadAction<boolean>) => {
            state.modelImage = action.payload;
        },
        setTrigger: (state) => {
            state.trigger = !state.trigger;
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(isPending(), state => {
                state.error.status = false;
                state.activeRequests += 1;
                state.isLoading = true;
            })
            .addMatcher(isFulfilled(), state => {
                state.activeRequests -= 1;
                if (state.activeRequests === 0) {
                    state.isLoading = false;
                }
            })
            .addMatcher(isRejected(), (state, action) => {
                state.activeRequests -= 1;
                state.isLoading = false;
                state.error.status = true;
                if (typeof action.payload === "string") {
                    state.error.message = action.payload;
                }
            })

    }
});

const {reducer: trackReducer, actions} = trackSlice;

const trackActions = {...actions}

export {
    trackReducer,
    trackActions
}
