import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App.tsx';
import ResponsiveTable from './components/ResponsiveTable';

const theme = {
  colors: {
    primary: '#646cff',
    secondary: '#535bf2',
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <ResponsiveTable />
    </ThemeProvider>
  </StrictMode>,
);
