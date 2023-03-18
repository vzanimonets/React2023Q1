import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
