import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'embroider-with-webpack-build-plugins-demo/config/environment';

import * as info from '~build/package';
import * as meta from '~build/meta';

console.log({ info, meta });

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
