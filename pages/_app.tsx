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


  <script
  id="adsbygoogle-init"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0461397062088269"
/>
      </Head>
      <Script id="ga4"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LNQ9BKP8VM`}
      />
      <Script id="ga42"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LNQ9BKP8VM', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
  
      <Component {...pageProps} />
     
    </>
  )
}