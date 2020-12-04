const { nextI18NextRewrites } = require('next-i18next/rewrites');

module.exports = {
  rewrites: async () => nextI18NextRewrites({}),
  publicRuntimeConfig: {
    localeSubpaths: {},
  },
};
