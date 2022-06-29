import { GET_BOOKS_ERROR, GET_BOOKS_LOADING, GET_BOOKS_SUCCESS } from "./action.type.first"

const initalState = {
    books:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initalState,{type,payload})=>{
    switch(type) {
        case GET_BOOKS_LOADING :{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_BOOKS_SUCCESS :{
            return {
                ...state,
                books:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_BOOKS_ERROR :{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return state
        }
    }
}