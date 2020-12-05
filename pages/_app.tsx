import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from '../i18n';
import '../styles/global.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  const getClassNamesForRoute = (router: AppProps['router']) => {
    const classes = [];

    if (router.route === '/') classes.push('welcome');
    if (router.route.startsWith('/by-ingredient')) classes.push('select-drink');
    if (router.route === '/confirm-order') classes.push('confirm-order');
    if (router.route === '/thank-you') classes.push('thank-you');

    if (router.query?.back === 'true') classes.push('back');

    return classes;
  };

  return (
    <>
      <div className={`background ${getClassNamesForRoute(router).join(' ')}`} />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
