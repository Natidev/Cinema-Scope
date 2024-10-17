import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import SingleMoviePage from './SingleMoviePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import SearchResultsPage from './SearchResultsPage'
import MoviesPage from './MoviesPage'



const AllRouting = ({isLogin, setIsLogin}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/movie/:movie_id' element={<SingleMoviePage/>}/>
            <Route path='/login' element={<LoginPage  isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/search/:query?' element={<SearchResultsPage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
            <Route path='*' element={<div>No page found</div>}/>
        </Routes>
    </div>
  )
}

export default AllRouting