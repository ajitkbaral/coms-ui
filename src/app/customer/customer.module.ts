import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CustomerHomeComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class CustomerModule {}
