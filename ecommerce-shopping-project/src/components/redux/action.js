// action type 
export const GET_DATA = "GET_DATA";

// action creator
export const getproductData = (data) => {
    return {
        type : GET_DATA,
        payload : data
    }
}