import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay />} />
        </Routes>
        <Routes>
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
