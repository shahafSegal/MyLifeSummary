import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle"
import UserRegister from './components/pages/UserRegister'
import { BrowserRouter, Routes,Route } from 'react-router-dom/dist'
import CreateResume from './components/pages/createResume';
import MyResumes from './components/pages/MyResumes';
import { ThemeProvider, createTheme } from '@mui/material'
import NavBar from './components/navBar'

function App() {

  const [IsDark, setIsDark] = useState(true)
  const toggleDark=()=>{
    setIsDark(!IsDark)
  }

  const darkTheme=createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#434346',
      },
      secondary: {
        main: '#f48fb1',
      }
    }
  })
  const lightTheme=createTheme({
      palette: {
        mode: 'light',
        // primary: {
        //   main: '#000000',
        // },
        // secondary: {
        //   main: '#90caf9',
        // }
      }
  })
 return(
    
      <BrowserRouter>
        <div data-theme={IsDark?"dark":"light"} id='App'>
          <ThemeProvider theme={IsDark?darkTheme:lightTheme}>
          <NavBar toggleDark={toggleDark} isDark={IsDark}/>
          <Routes>
            <Route path='/' element={<CreateResume/>}/>
            <Route path='/register' element={<UserRegister/>}/>
            <Route path='/resumes'  element={<MyResumes/>}>
              <Route  path=':resumeID' element={<MyResumes/>}/>
            </Route>
          </Routes>
          </ThemeProvider>

        </div>

      </BrowserRouter>
    
   

 ) 
}

export default App
