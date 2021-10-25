import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import userReducer from "./redusers/UserSlise"
import { postService } from "../service/postService"



const rootReducer = combineReducers({
    userReducer,
    [postService.reducerPath]: postService.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postService.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']