import React from 'react'
import{Routes,Route} from "react-router-dom"
import Login from './Login'
import Books from './Books'
import EditBooks from './EditBooks'
import SingleBooks from './SingleBooks'
function MainRoute() {
  return (
    <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/books/:id'element={<SingleBooks/>}/>
          <Route path='/books/:id/edit' element={<EditBooks/>}/>
          <Route path='/admin' element={<Login/>}/>
          <Route path='*' element={<h2>page is not found</h2>}/>
    </Routes>
  )
}

export default MainRoute