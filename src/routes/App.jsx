import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Layout from '@components/Layout';
import { NotFound } from '@pages/NotFound';
import { CharacterDetails } from '@pages/CharacterDetails';

import '@styles/Globals.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };