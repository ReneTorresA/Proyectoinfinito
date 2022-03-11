import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import PythonPage from './components/Pages/PythonPage'
import './components/Pages/Funcioncreadorpy'
import CalculoIIIPage from './components/Pages/CalculoIIIPage'

function App() {
  return (

    <HashRouter>

      
      <Header/>
        
      <Routes>    
        <Route path='/*' element={<div>
          <Header/>
          <Main/>  
        </div>}/>
        

        <Route path='/python/*' element={<PythonPage/>}/>
        <Route path='/calculo3/*' element={<CalculoIIIPage/>}/>


      </Routes>
    </HashRouter>

  )
}

export default App 