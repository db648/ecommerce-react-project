import { rootReducer } from "./ProductReducer";
import { configureStore } from "@reduxjs/toolkit"

const reducer = {
    cartReducer : rootReducer 
}

export const store = configureStore({
    reducer
})

console.log("initial store", store.getState());

