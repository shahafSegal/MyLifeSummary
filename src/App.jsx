import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import UserRegister from './components/pages/UserRegister'
import { BrowserRouter, Routes,Route } from 'react-router-dom/dist'
import NavBar from './components/navBar'
import CreateResume from './components/pages/createResume';
import MyResumes from './components/pages/MyResumes';

function App() {
 return(
    
      <BrowserRouter>
        <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<CreateResume/>}/>
        <Route path='/register' element={<UserRegister/>}/>
        <Route path='/resumes'  element={<MyResumes/>}>
          <Route  path=':resumeID' element={<MyResumes/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
    
   

 ) 
}

export default App
