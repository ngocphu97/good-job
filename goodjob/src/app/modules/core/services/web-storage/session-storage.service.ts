import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  private storage: Storage;

  constructor() {
    if (!window.sessionStorage) {
      throw new Error('Current browser does not support sessionStorage');
    }
    this.storage = localStorage;
  }

  exists(key: string): boolean {
    return !!this.storage.getItem(key);
  }

  get(key: string): any {
    const result = this.storage.getItem(key);
    if (result === undefined || result == null) {
      return null;
    }
    try {
      return JSON.parse(result);
    } catch (e) {
      return result;
    }
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }
}
