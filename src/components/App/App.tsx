import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import FormPage from '../../pages/FormPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';

export type ItemType = {
  id: string;
  title: string;
  description: string;
  image: string;
  delivery: string;
  status: string;
};
export type ShotInfoType = {
  id: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  description?: string;
  image: string;
  status?: string;
  delivery?: string;
  onClick?: () => void;
};

export type RequestType = {
  users: ShotInfoType[];
  fields?: string | undefined;
  limit?: number;
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="forms" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
