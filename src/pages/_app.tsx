import { AppProps } from 'next/app';  // Import AppProps from Next.js
import '../styles/globals.css';       // Your globals.css import

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
