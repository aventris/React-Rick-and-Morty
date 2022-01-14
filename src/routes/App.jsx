import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@pages/Home';
import { Episodes } from '@pages/Episodes';
import { Locations } from '@pages/Locations';
import { Layout } from '@components/Layout';
import { NotFound } from '@pages/NotFound';

import '@styles/Globals.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };