import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PythonPage from './components/Pages/PythonPage'
import Pagepython2 from './components/Pages/Pagepython2'
import './components/Pages/Funcioncreador'

function App() {
  return (

    <BrowserRouter>

      <Header/>
        
      <Routes>    
        <Route path='/' element={<div>
        
          <Main/>  
          <Footer/>
        </div>}/>
        

        <Route path='/Python/*' element={<PythonPage/>}/>
        <Route path='/Python2/*' element={<Pagepython2/>}/>


      </Routes>
    </BrowserRouter>

  )
}

export default App 