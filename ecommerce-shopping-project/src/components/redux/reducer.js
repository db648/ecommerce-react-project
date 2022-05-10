import { GET_DATA } from "./action";
import { combineReducers } from "redux"

const initstate = {
    ProductData : []
}

export const ProductReducer = (state = initstate, {type, payload}) =>{
    switch(type) {
        case GET_DATA : 
        return {
            ...state,
            ProductData : payload
        }

        default : 
            return state;
    }
}

export const rootReducer = combineReducers({
    ProductReducer
})
