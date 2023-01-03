import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Heart from './components/Heart';
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem('token')
    }
  },
  applyMiddleware(reduxThunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path ="/" element={<Welcome />} />
            <Route path ="signin" element={<Signin />} />
            <Route path ="heart" element={<Heart />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
