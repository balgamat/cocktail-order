import Head from 'next/head';
import React, { FC } from 'react';

export interface ISEO {
  title: string;
}

export const SEO: FC<ISEO> = (props) => (
  <Head>
    <title>{props.title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)