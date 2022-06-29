import axios from "axios"
import { GET_BOOKS_ERROR, GET_BOOKS_LOADING, GET_BOOKS_SUCCESS } from "./action.type.first"


export const getBooks = (params)=>(dispatch)=>{

    dispatch({type:GET_BOOKS_LOADING})
    axios.get("http://localhost:8080/books",params)
    .then((r)=>dispatch({type:GET_BOOKS_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:GET_BOOKS_ERROR}))
}