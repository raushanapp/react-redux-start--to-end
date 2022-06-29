import React from 'react'

function BooksCard({bookData}) {
  return (
    <div key={bookData.id}>
        <img src={bookData.cover_photos} alt={bookData.author}  width='100%' height='220px'/>
        <div>{bookData.books_name}</div>
        <div>{bookData.release_years}</div>
        <div>{bookData.category}</div>
    </div>
  )
}

export default BooksCard