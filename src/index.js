import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mastodon from './Mastodon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mastodon />
  </React.StrictMode>
);
export default Mastodon;
