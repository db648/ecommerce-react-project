// action type 
export const ADD_ITEM = "ADD_ITEM";
export const DEL_ITEM = "DEL_ITEM";
export const CLEAR_ITEM = "CLEAR_ITEM";

// action creator
export const addProduct = (data) => {
    return {
        type : ADD_ITEM,
        payload : data
    }
}

export const deleteProduct = (data) => {
    return {
        type : DEL_ITEM,
        payload : data
    }
}

export const clearBag = (data) => {
    return {
        type : CLEAR_ITEM,
        payload : data
    }
}