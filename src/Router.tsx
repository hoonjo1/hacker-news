import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Top from './pages/Top';
import Ask from './pages/Ask';
import Jobs from './pages/Jobs';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top" element={<Top />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
