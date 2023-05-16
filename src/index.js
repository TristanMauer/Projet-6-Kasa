import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Header from './components/Header';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Apropos" element={<Apropos />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    
    
    </Router>
  </React.StrictMode>
);
