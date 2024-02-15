'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = async function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  const { default: info } = await import('unplugin-info/webpack');

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    packagerOptions: {
      webpackConfig: {
        plugins: [
          info({
            meta: async () => {
              return {
                message: 'Hello world!, from info.meta!',
              };
            },
            package: { dependencies: true, devDependencies: true },
          }),
        ],
      },
    },
  });
};
