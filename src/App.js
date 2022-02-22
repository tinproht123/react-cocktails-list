import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import { Navmenu, About, Home, SingleCocktail } from './components';

import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
}
