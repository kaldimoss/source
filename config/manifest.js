'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'Moss',
    short_name: 'Moss',
    description: 'Moss Homepage',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#FFF8F0',
    theme_color: '#afff31',
    prefer_related_applications: true,
    apple: {
      statusBarStyle: 'black-translucent',
      precomposed: 'true',
    },
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
      },
    ],
    ms: {
      tileColor: '#afff31',
    },
  };
};

