import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>
      EnflasyonKaç
    </title>
    <meta name="description" content="Enflasyon bilgilerine erişim için hazırlanmıştır" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />


      </Head>
      <Script id="Adsense-id" data-ad-client="ca-pub-0461397062088269"
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
      <Component {...pageProps} />
     
    </>
  )
}