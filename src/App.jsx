import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import ToDoList from './pages/ToDoList'
import WeatherPage from'./pages/WeatherPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComingSoonPage from './pages/ComingSoonPage'
import LibraryLab from './pages/LibraryLab'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/to-do-list" element={<ToDoList/>} />
      <Route path="/weather-app" element={<WeatherPage/>} />
      <Route path="/library-lab" element={<LibraryLab/>} />
      <Route path="/coming-soon" element={<ComingSoonPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
