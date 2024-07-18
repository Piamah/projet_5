import './styles/App.css';
import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Logement from './pages/Logement';

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/accueil" />} />
          <Route path="/accueil" element = {<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path = "/logement/:id" element = {<Logement />}/>
          <Route path ="*" element = {<Error />}/>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
