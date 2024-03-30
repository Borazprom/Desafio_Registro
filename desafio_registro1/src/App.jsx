import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {
  return (
    <>
    <div className='main'>
        <div className='title'>
            <h1>Crea una cuenta </h1>
        </div>
        <div className='registro'>
            <Registro/>
        </div>
    </div>
    </>
  )
}

export default App
