import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  authentication: {
    tokenKey: 'AccessToken',
    autoAuthorizedUris: [
      new RegExp('/api')
    ]
  },
  rootApiUrl: 'https://jsonplaceholder.typicode.com'
};
