import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core/services';

import { environment } from '@app/environment';
import { AuthToken } from '../models';

@Injectable()
export class TokenStoreManager {
  constructor(private localStorage: LocalStorageService) {
  }

  get(): AuthToken {
    return this.localStorage.get(environment.authentication.tokenKey);
  }

  save(value: AuthToken): void {
    console.log('value: ', value);
    this.localStorage.set(environment.authentication.tokenKey, value);
  }

  remove(): void {
    this.localStorage.remove(environment.authentication.tokenKey);
  }
}
