import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss'],
})
export class CustomerHomeComponent implements OnInit {
  customersData: Array<any>;
  page: Number = 1;

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
    this.customerService.getCustomerData().subscribe((data) => {
      this.customersData = data;
    });
  }

  navigate(id: String) {
    this.router.navigate(['/customers/customer-detail', id]);
  }
}
