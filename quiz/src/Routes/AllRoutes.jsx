import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Quiz } from '../Pages/Quiz'
import { SingleQuiz } from '../Pages/SingleQuiz'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Quiz/>}/>
        <Route path='/:id' element={<SingleQuiz/>}/>
    </Routes>
  )
}
