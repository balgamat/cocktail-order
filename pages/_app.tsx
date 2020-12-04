import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from '../i18n';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default appWithTranslation(App);
