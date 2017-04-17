import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private storage: any;

  constructor() {
    this.storage = sessionStorage;
  }

  public retrieve(key: string) {
    let item = this.storage.getItem(key);
    if (item && item !== 'undefined') {
      return JSON.parse(item);
    }
    return;
  }

  public store(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
