import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  public products = [];
  public cartItems;
  public customerId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomerIdFromRouteParams();
    this.getProducts();
    this.getCartItems();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getCartItems() {
    this.cartItems = this.cartService.getItems();
  }

  goToCheckoutPage() {
    this.router.navigate(['orders', 'checkout', this.customerId]);
  }

  getCustomerIdFromRouteParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.customerId = params['id'];
    });
  }
}
