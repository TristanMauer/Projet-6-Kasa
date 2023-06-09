import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.scss';
import Home from './pages/Home/Home.jsx';
import Apropos from './pages/Apropos/Apropos';
import FicheLogement from './pages/FicheLogement/logement';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <div className='container'>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Apropos" element={<Apropos />}/>
      <Route path="/*" element={<Error />}/>
      <Route path="/FicheLogement/:id" element={<FicheLogement />}/>
    </Routes>
    </div>
   <Footer />
    
    </Router>
  </React.StrictMode>
);
