import '../app/globals.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import { Roboto_Slab } from '@next/font/google';
import ErrorBoundary from '../components/ErrorBoundary';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <GlobalStyle />
      <div className={robotoSlab.className}>
        <Component {...pageProps} />
      </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default MyApp;
