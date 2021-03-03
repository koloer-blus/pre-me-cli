import { defineConfig } from 'vite';

import devConfig from './config/dev';
import prodConfig from './config/prod';

export default ({ command, mode }) => {
  let config = {};
  if (command === 'serve') {
    switch (mode) {
      case 'production':
        config = prodConfig;
        break;
      default:
        config = devConfig;
        break;
    };
  }
  return defineConfig(config);
};