import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

async function enableMocking() {
  const { worker } = await import('./msw/browser');
  return worker.start();
}

/**
 * Make sure to await the worker.start() Promise!
 *  Service Worker registration is asynchronous and
 * failing to await it may result in a race condition between
 * the worker registration and the initial requests your application makes.
 * */
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
