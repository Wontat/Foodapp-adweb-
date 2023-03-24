import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BagService {
  private bag: any = {};

  constructor() {}

  add(item: any): void {
    this.bag[item.name] = (this.bag[item.name] || 0) + 1;
  }

  count(item: any): number {
    return this.bag[item.name] || 0;
  }
}
