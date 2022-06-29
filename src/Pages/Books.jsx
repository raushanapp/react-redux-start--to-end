import React from 'react'
import { useEffect } from 'react'
import{useDispatch,useSelector} from "react-redux"
import BooksList from '../Components/BooksList'
import FilterSort from '../Components/FilterSort'
import { getBooks } from '../ReduxStore/firstStore/action.first'
import styled from "styled-components"
function Books() {
  const dispatch= useDispatch()
  const books = useSelector((state)=>state.books)
  // console.log("books:",books)
  useEffect(()=>{
    if(books.length===0){
      dispatch(getBooks())
    }
  },[])

  return (
    <div>
        <h2>Books</h2>
        <BooksPagesWrapper>
        <FilterSortWrapper>
         <FilterSort/>
        </FilterSortWrapper>
        <BookListWrapper>
         <BooksList books={books}/>
        </BookListWrapper>
       </BooksPagesWrapper>
    </div>
  )
}

export default Books


const BooksPagesWrapper = styled.div`
  display:flex;
`
const FilterSortWrapper = styled.div`
  width: 300px;
  border:1px solid gray;
`
const BookListWrapper = styled.div`
  width: 100%;
  border: 1px solid gray;
  display: grid;
  gap: 10px;
  justify-content: center;
  padding: initial;
  grid-template-columns:repeat(auto-fit,minmax(300px, max-content))
`