import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/interface/interface';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
  public dataLoaded: Boolean = false;
  public id: String;
  public customer: Customer;
  public orders;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getCustomerDetail();
    });
  }

  getCustomerDetail(): void {
    this.customerService.getById(this.id).subscribe((data) => {
      this.customer = data.customer;
      this.orders = data.orders;
      this.dataLoaded = true;
    });
  }

  goToNewOrderPage(): void {
    this.router.navigate(['orders', 'new', this.customer._id]);
  }

  goToOrderPage(id: string): void {
    this.router.navigate(['orders', 'detail', id]);
  }
}
