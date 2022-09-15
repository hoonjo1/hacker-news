import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';

import Home from './pages/Home/';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
