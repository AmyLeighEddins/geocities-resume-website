import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { AppWrapper } from '../context/context.js';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      document.documentElement.classList.add('animated-bg');
    };
    img.src = '/common/me.gif';
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.4" />
        <link rel="preload" href="/common/me-static.webp" as="image" />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
