import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import MainPage from 'pages/main/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
