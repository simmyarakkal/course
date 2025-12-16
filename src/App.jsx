// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LandingPage from './pages/LandingPage'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>} ></Route>     
      <Route path='/Course' element={   <Course/> } ></Route>
       <Route path='/Contact' element={ <Contact/>} ></Route>
       
    </Routes>
      
     
        
      <Footer/>
       
    </>
  )
}

export default App
