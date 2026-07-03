import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-T2KHX283'
}

TagManager.initialize(tagManagerArgs)

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);