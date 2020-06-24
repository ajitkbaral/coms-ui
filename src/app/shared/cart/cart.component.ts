import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public items;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  total() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }
}
