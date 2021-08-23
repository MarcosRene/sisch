import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from './contexts';

import { Routes } from './routes';

import GlobalStyles from './styles/global';

export function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyles />
    </AppProvider>
  );
}
