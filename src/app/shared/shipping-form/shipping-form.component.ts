import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ShippingAddress } from 'src/app/interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent implements OnInit {
  @Input() buttonText: string = 'Submit';
  @Input() shippingAddress: ShippingAddress = {
    streetAddress: null,
    city: null,
    state: null,
    zipCode: null,
  };
  @Output() submitFormEvent = new EventEmitter();
  public shippingForm: FormGroup;
  public cartItems;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCartItems();
    this.buildShippingForm();
  }

  private buildShippingForm(): void {
    this.shippingForm = this.fb.group({
      streetAddress: [
        this.shippingAddress.streetAddress,
        [Validators.required, Validators.minLength(3)],
      ],
      city: [
        this.shippingAddress.city,
        [Validators.required, Validators.minLength(3)],
      ],
      state: [this.shippingAddress.state, [Validators.required]],
      zipCode: [
        this.shippingAddress.zipCode,
        [Validators.required, Validators.pattern('^[0-9]{5}$')],
      ],
    });
  }

  public disableForm(): boolean {
    if (this.router.url.includes('orders/checkout')) {
      return this.cartItems.length === 0 || this.shippingForm.invalid;
    }
    return this.shippingForm.invalid;
  }

  public submit() {
    this.submitFormEvent.emit(this.shippingAddress);
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }

  get streetAddress() {
    return this.shippingForm.controls.streetAddress;
  }

  get city() {
    return this.shippingForm.controls.city;
  }

  get state() {
    return this.shippingForm.controls.state;
  }
  get zipCode() {
    return this.shippingForm.controls.zipCode;
  }
}
