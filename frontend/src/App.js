import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import RegisterUserPage from './pages/RegisterUserPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registerUser' element={<RegisterUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
