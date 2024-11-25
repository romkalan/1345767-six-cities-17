import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return (<MainPage />);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
