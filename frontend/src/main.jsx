import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx'; // Correct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>  {/* Wrap the app with UserProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
);
