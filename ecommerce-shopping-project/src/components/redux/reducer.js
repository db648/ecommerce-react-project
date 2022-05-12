import { ADD_ITEM, DEL_ITEM } from "./action";
import { combineReducers } from "redux"

// const initstate = {
    let ProductData = JSON.parse(localStorage.getItem("cartProducts")) || []
//}

export const ProductReducer = (state = ProductData, {type, payload}) =>{
    
    switch(type) {
        case ADD_ITEM : 
        //    let product = payload;
        //    console.log("payload",product)
        //    let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
        //    cart.push(product);
        //    localStorage.setItem("cartProducts", JSON.stringify(cart));
        //     return {
        //         ...state,
        //         ProductData : cart
        //     }
        let product = payload;
        const exist = state.find((x) => x.id === product.id)
            if (exist) {
                //increment the quantity
                let updateCart = state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
                localStorage.setItem("cartItems", JSON.stringify(updateCart));
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            }
            else {
                const product = payload;
                localStorage.setItem("cartItems", JSON.stringify(
                    [
                        ...state,
                        {
                            ...product,
                            qty: 1,
                        }
                    ]
                ))
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case DEL_ITEM : 
            //  let del = state.filter((x) => x.id !== payload.id)
            //  localStorage.setItem("cartProducts", JSON.stringify(del));

            //  return {
            //     ...state,
            //     ProductData : del
            // }
            
            const exist1 = state.find((x) => x.id === payload.id);
            if(exist1.qty === 1) {
                return state.filter((z) => z.id !== exist1.id);
            }
            else {
                return state.map((e) => 
                x.id === payload.id ? {...e, qty : e.qty-1} : e);
            }

        default : 
            return state;
    }
}

export const rootReducer = combineReducers({
    ProductReducer,
})
