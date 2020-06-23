import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerHomeComponent,
  },
  { path: 'customer-detail/:id', component: CustomerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
