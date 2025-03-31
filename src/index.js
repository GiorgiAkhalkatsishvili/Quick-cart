// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = '625187534633-hmgbdet5cvb7h1qcvduuvsdhelmjcm8t.apps.googleusercontent.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
      </GoogleOAuthProvider>
  </Provider>
);
