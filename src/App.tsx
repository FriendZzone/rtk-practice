import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AppRoutes from 'routes';
import './App.css';
import themeConfig from 'theme';
import getLPTheme from 'getLPTheme';

function App() {
  const LPtheme = createTheme(getLPTheme());

  return (
    <EmotionThemeProvider theme={themeConfig}>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
}

export default App;
