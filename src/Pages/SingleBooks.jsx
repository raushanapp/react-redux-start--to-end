import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getBooks } from '../ReduxStore/firstStore/action.first'
function SingleBooks() {
  const {id} =useParams()
  const disptach = useDispatch()
  const books= useSelector((state)=>state.books)
  const [currentBooks,setCurrentBooks] =useState({})
  console.log(id)
   useEffect(()=>{
     if(books.length===0){
       disptach(getBooks())
     }
   },[books?.length,disptach])
  useEffect(()=>{
     if(id){
       const temp =books.find((books)=>books.id===Number(id))
       temp && setCurrentBooks(temp);
     }
  },[books,id])
  // console.log(currentBooks)

  return (
    <div>
       <img src={currentBooks.cover_photos} alt={currentBooks.books_name} width='30%' height="250px"/>
       <h2>{currentBooks.books_name}</h2>
       <div>{currentBooks.category}</div>
       <div>{currentBooks.release_years}</div>
    </div>
  )
}

export default SingleBooks