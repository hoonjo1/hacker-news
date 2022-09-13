import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/";
import Test from "./pages/Test";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
