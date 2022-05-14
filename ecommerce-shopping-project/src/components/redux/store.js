import { rootReducer } from "./index";
import { configureStore } from "@reduxjs/toolkit"

const reducer = {
    cartReducer : rootReducer ,
    authReducer : rootReducer
}

export const store = configureStore({
    reducer
})

console.log("initial store", store.getState());

