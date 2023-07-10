import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioApp } from './app';

const root = document!.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <BrowserRouter>
    <PortfolioApp />
  </BrowserRouter>
);
