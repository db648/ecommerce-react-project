import { ADD_ITEM, CLEAR_ITEM, DEL_ITEM } from "./action";
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
                localStorage.setItem("cartProducts", JSON.stringify(updateCart));
                
                return updateCart
            }
            else {
                const product = payload;
                localStorage.setItem("cartProducts", JSON.stringify(
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
            

        case DEL_ITEM : 
            //  let del = state.filter((x) => x.id !== payload.id)
            //  localStorage.setItem("cartProducts", JSON.stringify(del));

            //  return {
            //     ...state,
            //     ProductData : del
            // }
            
            const exist1 = state.find((x) => x.id === payload.id);
            if(exist1.qty === 1) {
                let deleteproduct = state.filter((z) => z.id !== exist1.id);
                localStorage.setItem("cartProducts", JSON.stringify(deleteproduct));
                return deleteproduct
            }
            else {
                let deleteitem = state.map((e) => 
                e.id === payload.id ? {...e, qty : e.qty-1} : e);
                localStorage.setItem("cartProducts", JSON.stringify(deleteitem));
                return deleteitem
            }

        case CLEAR_ITEM :
            let del = state.filter((x) => x.id !== payload.id)
            localStorage.setItem("cartProducts", JSON.stringify(del));

            return del

        default : 
            return state;
    }
}

export const rootReducer = combineReducers({
    ProductReducer,
})
