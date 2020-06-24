import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;
  public latitude;
  public longitude;

  constructor(
    private fb: FormBuilder,
    private orderSerivce: OrderService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.buildCheckoutForm();
    this.getUserLocation();
  }

  private buildCheckoutForm() {
    this.checkoutForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public submitCheckoutForm() {
    let products = [];
    this.cartService.getItems().forEach((item) => {
      products.push(item._id);
    });
    this.orderSerivce
      .placeOrder({ products, customerId: '5ef1d578f7862a4b32c8be07' })
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
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

  get firstName() {
    return this.checkoutForm.controls.firstName;
  }

  get lastName() {
    return this.checkoutForm.controls.lastName;
  }
  get email() {
    return this.checkoutForm.controls.email;
  }
}
