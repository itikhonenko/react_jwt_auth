import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Heart from './components/Heart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path ="/" element={<Welcome />} />
          <Route path ="signin" element={<Signin />} />
          <Route path ="heart" element={<Heart />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
