import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = [];

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

  removeFromCart(id: string) {
    let itemIndex;
    this.items.filter((item, index) => {
      if (item._id === id) {
        itemIndex = index;
        return true;
      }
      return false;
    });
    this.items.splice(itemIndex, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  totalPurchaseAmount(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }
}
