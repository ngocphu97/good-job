import { AuthService } from './auth.service';
import { TokenStoreManager } from '@app/auth/services/token-storage.service';

export {
  AuthService
};

export const services: Array<any> = [
  TokenStoreManager,
  AuthService
];
