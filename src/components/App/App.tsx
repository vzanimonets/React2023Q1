import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import FormPage from '../../pages/FormPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';
import pic82 from '../../assets/images/82.jpg';
import pic39 from '../../assets/images/39.jpg';
import pic10 from '../../assets/images/10.jpg';
import pic12 from '../../assets/images/12.jpg';
import pic30 from '../../assets/images/30.jpg';
import pic15 from '../../assets/images/15.jpg';

export type ItemType = {
  id: string;
  title: string;
  text: string;
  image: string;
  radio?: string;
  status?: string | undefined;
};

const data = [
  {
    id: uuidv4(),
    title: 'Title',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
                    exercitationem fuga fugit inventore laboriosam quis rem repellendus sint totam!
                    Alias aspernatur at, autem distinctio iste laboriosam non nostrum unde.`,
    image: `${pic82}`,
  },
  { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic39}` },
  { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic82}` },
  { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic10}` },
  { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic12}` },
  { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic30}` },
  {
    id: uuidv4(),
    title: 'Title',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
                    exercitationem fuga fugit inventore laboriosam quis rem repellendus sint totam!
                    Alias aspernatur at, autem distinctio iste laboriosam non nostrum unde.`,
    image: `${pic15}`,
  },
  { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic39}` },
];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage data={data} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="forms" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
