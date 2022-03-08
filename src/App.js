import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PythonPage from './components/Pages/PythonPage'
import './components/Pages/Funcioncreadorpy'
import CalculoIIIPage from './components/Pages/CalculoIIIPage'

function App() {
  return (

    <BrowserRouter>

      
      <Header/>
        
      <Routes>    
        <Route path='/*' element={<div>
        
          <Main/>  
          <Footer/>
        </div>}/>
        

        <Route path='/python/*' element={<PythonPage/>}/>
        <Route path='/calculo3/*' element={<CalculoIIIPage/>}/>


      </Routes>
    </BrowserRouter>

  )
}

export default App 