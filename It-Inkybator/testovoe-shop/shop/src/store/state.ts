import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './slaces/itemsSlice'
import userReducer from './slaces/userSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch=()=>useDispatch<AppDispatch>()