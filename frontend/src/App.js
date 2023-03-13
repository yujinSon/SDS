import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import GameMainPageLayout from 'layouts/GamePageLayout';

import MainPage from 'pages/main/MainPage';
import GameMainPage from 'pages/game/GameMainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<GameMainPageLayout />}>
          <Route path="start" element={<GameMainPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
