import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from '../Components/News/News';
import Games from '../Components/Games/Games';
import Game from '../Components/Game/Game';
import NotFound from '../Components/NotFound/NotFound';
import Header from '../Components/Header/Header';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="games" element={<Games />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
