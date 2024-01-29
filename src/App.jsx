import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import UserRegister from './components/pages/UserRegister'
import { BrowserRouter, Routes,Route } from 'react-router-dom/dist'
import NavBar from './components/navBar'

function App() {
 return(
    
      <BrowserRouter>
        <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/register' element={<UserRegister/>}/>
      </Routes>

      </BrowserRouter>
    
   

 ) 
}

export default App
