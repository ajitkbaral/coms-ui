import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;
  public cartItems;
  public latitude;
  public longitude;
  public customerId: number;

  constructor(
    private fb: FormBuilder,
    private orderSerivce: OrderService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomerId();
    this.getCartItems();
    this.buildCheckoutForm();
  }

  private buildCheckoutForm(): void {
    this.checkoutForm = this.fb.group({
      streetAddress: [null, [Validators.required, Validators.minLength(3)]],
      city: [null, [Validators.required, Validators.minLength(3)]],
      state: [null, [Validators.required]],
      zipCode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    });
  }

  public submitCheckoutForm(): void {
    let products = [];
    this.cartItems.forEach((item) => {
      products.push(item._id);
    });
    this.orderSerivce
      .placeOrder({
        products,
        customerId: this.customerId,
        streetAddress: this.streetAddress.value,
        city: this.city.value,
        state: this.state.value,
        zipCode: this.zipCode.value,
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

  getCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }

  getCustomerId(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.customerId = params['id'];
    });
  }

  get streetAddress() {
    return this.checkoutForm.controls.streetAddress;
  }

  get city() {
    return this.checkoutForm.controls.city;
  }

  get state() {
    return this.checkoutForm.controls.state;
  }
  get zipCode() {
    return this.checkoutForm.controls.zipCode;
  }
}
