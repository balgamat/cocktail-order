const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

const i18n = new NextI18Next({
  defaultLanguage: 'en',
  defaultNS: 'common',
  localePath: path.resolve('./public/static/locales'),
  localeSubpaths,
});

module.exports = i18n;
