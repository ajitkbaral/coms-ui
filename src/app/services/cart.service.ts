import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];

  constructor() {}

  addToCart(product) {
    let item;
    if (this.items.filter((item) => item._id === product._id).length === 1) {
      item = this.items.filter((item) => item._id === product._id)[0];
      item.quantity += 1;
    } else {
      let item = { ...product };
      item.quantity = 1;
      this.items.push(item);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
