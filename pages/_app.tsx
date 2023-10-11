import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

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

      <Component {...pageProps} />
     
    </>
  )
}