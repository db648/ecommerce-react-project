import { ADD_ITEM, DEL_ITEM } from "./action";
import { combineReducers } from "redux"

const initstate = {
    ProductData : JSON.parse(localStorage.getItem("cartProducts")) || []
}

export const ProductReducer = (state = initstate, {type, payload}) =>{
    
    switch(type) {
        case ADD_ITEM : 
           let product = payload;
           console.log("payload",product)
           let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
           cart.push(product);
           localStorage.setItem("cartProducts", JSON.stringify(cart));
            return {
                ...state,
                ProductData : cart
            }

            
        case DEL_ITEM : 
             let del = state.filter((x) => x.id !== payload.id)
             localStorage.setItem("cartProducts", JSON.stringify(del));

             return {
                ...state,
                ProductData : del
            }

            // const exist1 = state.ProductData.find((x) => x.id === payload.id);
            // if(exist1.qty === 1) {
            //     return state.filter((z) => z.id !== exist1.id);
            // }
            // else {
            //     return state.map((e) => 
            //     x.id === payload.id ? {...e, qty : e.qty-1} : e);
            // }
                

        default : 
            return state;
    }
}

export const rootReducer = combineReducers({
    ProductReducer,
})
