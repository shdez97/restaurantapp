import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Direction from './components/Direction';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/direction' element={<Direction />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )}
  export default App;


