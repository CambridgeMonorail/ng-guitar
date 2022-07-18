import npm from '../../../../package.json';

const version = npm.version;

export const environment = {
  production: true,
  VERSION: version,
};
