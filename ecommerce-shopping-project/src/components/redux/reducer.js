import { ADD_ITEM, DEL_ITEM } from "./action";
import { combineReducers } from "redux"

const initstate = {
    ProductData : []
}

export const ProductReducer = (state = initstate, {type, payload}) =>{
    switch(type) {
        case ADD_ITEM : 
        return {
            ...state,
            ProductData : payload
        }

        case DEL_ITEM : 
            return {
                ...state
            }
        // return state = state.filter((x) => {
        //     return x.id !== payload.id;
        // }) 

        default : 
            return state;
    }
}

export const rootReducer = combineReducers({
    ProductReducer
})
