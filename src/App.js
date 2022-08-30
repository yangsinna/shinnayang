import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Square from './Square/Square';
import File from './Square/File';
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/square" element={<Square />} />
        <Route path="/File" element={<File />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
