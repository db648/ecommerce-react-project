import { combineReducers } from "redux";
import { ProductReducer } from "./cart-redux/ProductReducer";
import { AuthReducer } from "./auth-redux/reducer";

export const rootReducer = combineReducers({
    ProductReducer,
    AuthReducer
})
