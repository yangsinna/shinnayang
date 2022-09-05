import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Square from './Square/Square';



function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/square" element={<Square />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
