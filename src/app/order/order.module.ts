import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHomeComponent } from './order-home/order-home.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    OrderHomeComponent,
    CheckoutComponent,
    AddOrderComponent,
    OrderDetailComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class OrderModule {}
