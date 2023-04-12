import React from 'react'
import Home from './components/home/home'
import { Route, Routes } from 'react-router-dom'
import Main from './components/404/main'
import Login from './components/auth/login/login'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path='*' element={<Main/> } />                  
             
            </Routes>

        </div>
    )
}
 