import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/interface/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  public checkoutForm: FormGroup;
  order;
  public customer: Customer;
  public itemsPerPage: number = 4;
  public page: number = 1;

  constructor(
    private fb: FormBuilder,
    private orderSerivce: OrderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const orderId = params['id'];
      this.getOrder(orderId);
    });
  }

  private buildCheckoutForm(): void {
    this.checkoutForm = this.fb.group({
      streetAddress: [
        this.order.streetAddress,
        [Validators.required, Validators.minLength(3)],
      ],
      city: [this.order.city, [Validators.required, Validators.minLength(3)]],
      state: [this.order.state, [Validators.required]],
      zipCode: [
        this.order.zipCode,
        [Validators.required, Validators.pattern('^[0-9]{5}$')],
      ],
    });
  }

  getOrder(id): void {
    this.orderSerivce.getOrderById(id).subscribe(
      (order) => {
        this.order = order;
        this.customer = order.customer;
        this.buildCheckoutForm();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteOrder(): void {
    this.orderSerivce.deleteOrder(this.order._id).subscribe(
      (res) => {},
      (err) => {}
    );
  }

  deleteProduct(id: string): void {
    let productIndex;
    this.order.products.filter((product, index) => {
      if (product._id === id) {
        productIndex = index;
        return true;
      }
      return false;
    });
    this.order.products.splice(productIndex, 1);
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
