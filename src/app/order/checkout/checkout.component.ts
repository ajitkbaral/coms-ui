import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomerId();
    this.getCartItems();
    this.buildCheckoutForm();
    this.getUserLocation();
  }

  private buildCheckoutForm(): void {
    this.checkoutForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  public submitCheckoutForm(): void {
    let products = [];
    this.cartItems.forEach((item) => {
      products.push(item._id);
    });
    this.orderSerivce
      .placeOrder({ products, customerId: this.customerId })
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getCartItems() {
    this.cartItems = this.cartService.getItems();
  }

  getCustomerId(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.customerId = params['id'];
    });
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
      console.log();
    } else {
      console.log('No support for geolocation');
    }
  }

  get address() {
    return this.checkoutForm.controls.address;
  }

  get lastName() {
    return this.checkoutForm.controls.lastName;
  }
  get email() {
    return this.checkoutForm.controls.email;
  }
}
