import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHomeComponent } from './order-home/order-home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderHomeComponent,
  },
  {
    path: 'new',
    component: AddOrderComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
