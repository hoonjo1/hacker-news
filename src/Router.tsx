import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Top from './pages/Top';
import Show from './pages/Show';
import Ask from './pages/Ask';
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top" element={<Top />} />
      <Route path="/new" element={<New />} />
      <Route path="/show" element={<Show />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
