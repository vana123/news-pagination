import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { newsAPI } from '../service/NewsService';
import { postReducer } from './reducer/post';
import { searchReducer } from './reducer/search';

const rootReducer = combineReducers({
    postReducer,
    searchReducer,
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