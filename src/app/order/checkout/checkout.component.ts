import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingAddress } from 'src/app/interface/interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public customerId: number;
  public cartItems;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomerId();
    this.getCartItems();
  }

  private getCustomerId(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.customerId = params['id'];
    });
  }

  private getCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }

  public placeOrder(addressInfo: ShippingAddress): void {
    let products = [];
    this.cartItems.forEach((item) => {
      products.push(item._id);
    });
    this.orderService
      .placeOrder({
        products,
        customerId: this.customerId,
        ...addressInfo,
        totalAmount: this.cartService.totalPurchaseAmount(),
      })
      .subscribe(
        (res) => {
          this.router.navigate(['orders']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
