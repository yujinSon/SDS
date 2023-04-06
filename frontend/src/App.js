import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'styles/theme';

import GameMainPageLayout from 'layouts/GamePageLayout';

import MainPage from 'pages/main/MainPage';
import BattlePage from 'pages/game/BattlePage';
import EndingPage from 'pages/game/EndingPage';
import ShopPage from 'pages/game/ShopPage';
import DataPage from 'pages/game/DataPage';
import DataDefeatPage from 'pages/game/DataDefeatPage';

import SecretAPI from 'pages/SecretAPI';

// 프레임만 설정하고 나중에 지울거임 (03.29 민혁)
import ItemPage from 'pages/game/ItemPage';
import RecruitPage from 'pages/game/RecruitPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GameMainPageLayout />}>
            <Route path="" element={<RecruitPage />} />
            <Route path="ready" element={<ItemPage />} />
          </Route>
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/ending" element={<EndingPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/datadefeat" element={<DataDefeatPage />} />
          <Route path="/yongchan" element={<SecretAPI />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    height: 100%;
    color: white;
  }
`;

export default App;
