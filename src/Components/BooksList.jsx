import React from 'react'
import BooksCard from './BooksCard'
import styled from "styled-components"
function BooksList({books}) {
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