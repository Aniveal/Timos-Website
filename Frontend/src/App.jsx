import { useState } from 'react'
import Header from './Header.jsx'
import {Projects} from './Projects.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx'
import GamePage from './GamePage.jsx'

function App() {
  

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games/:gameID" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
