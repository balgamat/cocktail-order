import GoogleFonts from 'next-google-fonts';
import Head from 'next/head';
import React, { FC } from 'react';

export interface ISEO {
  title: string;
}

export const SEO: FC<ISEO> = props => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@100;300;500;700;900&family=Pacifico&display=swap" />
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);
