import { createMiddleware } from 'istanbul-middleware';
import istanbulConfig from '../../.nycrc.json';

export default (on, config) => {
  const coverageMiddleware = createMiddleware(istanbulConfig);
  on('dev-server:start', (options) => {
    return new Promise((resolve, reject) => {
      const server = options.app;
      server.use(coverageMiddleware);
      resolve();
    });
  });
};
