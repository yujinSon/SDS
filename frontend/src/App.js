import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'styles/theme';

import GameMainPageLayout from 'layouts/GamePageLayout';

import MainPage from 'pages/main/MainPage';
import GameMainPage from 'pages/game/GameMainPage';
import MapPage from 'pages/game/MapPage';
import BattlePage from 'pages/game/BattlePage';
import EndingPage from 'pages/game/EndingPage';
import ShopPage from 'pages/game/ShopPage';

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
          <Route path="/map" element={<MapPage />} />
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
