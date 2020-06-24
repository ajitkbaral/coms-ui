import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHomeComponent } from './order-home/order-home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddOrderComponent } from './add-order/add-order.component';

@NgModule({
  declarations: [OrderHomeComponent, CheckoutComponent, AddOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OrderModule {}
