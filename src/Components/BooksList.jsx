import React from 'react'
import BooksCard from './BooksCard'
import { useEffect } from 'react'
import {useSearchParams,useLocation} from "react-router-dom"
import{useDispatch,useSelector} from "react-redux"
import { getBooks } from '../ReduxStore/firstStore/action.first'
import styled from "styled-components"
function BooksList() {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const dispatch= useDispatch()
    const books = useSelector((state)=>state.books)
    // console.log("books:",books)
    useEffect(()=>{
      if(books.length=== 0 || location.search){
        const sortBy = searchParams.get("sortBy")
        let getBooksParams = {
            params: { category:searchParams.getAll("category"),
              _sort:sortBy && "release_years",
              _order:sortBy
            },
        };
        dispatch(getBooks(getBooksParams))
      }
    },[location.search]);
    console.log(location)
  return (
    <>
      {books.length>0 && books.map((singleBooks)=>(
        <BooksListWrapper key={singleBooks.id} >
         <BooksCard  bookData={singleBooks} />
        </BooksListWrapper>
      ))}
    </>
  )
}

export default BooksList
const BooksListWrapper = styled.div`
  border: 1px solid teal;
  padding: 10px;
  width: 300px;
`