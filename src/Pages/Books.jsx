import React from 'react'

import BooksList from '../Components/BooksList'
import FilterSort from '../Components/FilterSort'
import styled from "styled-components"
function Books() {
 

  return (
    <div>
        <h2>Books</h2>
        <BooksPagesWrapper>
        <FilterSortWrapper>
         <FilterSort/>
        </FilterSortWrapper>
        <BookListWrapper>
         <BooksList />
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