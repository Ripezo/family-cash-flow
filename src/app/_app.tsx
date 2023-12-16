import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomTheme from '@/app/design-system/CustomTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;