import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss'],
})
export class OrderHomeComponent implements OnInit {
  public products = [];
  public cartItems;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.cartItems = this.cartService.getItems();
  }

  goToCheckoutPage() {
    this.router.navigate(['orders', 'checkout']);
  }
}
