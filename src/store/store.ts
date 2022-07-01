import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { newsAPI } from '../service/NewsService';

const rootReducer = combineReducers({
    
    [newsAPI.reducerPath]: newsAPI.reducer,
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(newsAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']