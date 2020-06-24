import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
