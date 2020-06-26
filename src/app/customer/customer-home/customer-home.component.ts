import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interface/interface';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss'],
})
export class CustomerHomeComponent implements OnInit {
  customersData: Array<Customer>;
  page: number = 1;
  itemsPerPage: number = 4;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customersData = new Array<any>();
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomerData().subscribe((customers) => {
      this.customersData = customers;
    });
  }

  goToCustomerDetailPage(id: String) {
    this.router.navigate(['/customers/customer-detail', id]);
  }

  goToAddOrderPage(id: String) {
    this.router.navigate(['/orders/new', id]);
  }
}
