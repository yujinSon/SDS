import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'pages/main/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
