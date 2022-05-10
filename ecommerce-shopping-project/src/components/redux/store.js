import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit"

const reducer = {
    productDataReducer : rootReducer 
}

export const store = configureStore({
    reducer
})

console.log("initial store", store.getState());

