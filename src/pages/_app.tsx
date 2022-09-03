import type { AppProps } from 'next/app';
import GlobalStyle from 'global/globalstyles';
import { usePageLoadTracking } from 'hooks';

function MyApp({ Component, pageProps }: AppProps) {
  usePageLoadTracking();
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
