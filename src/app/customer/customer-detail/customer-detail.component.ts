import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
  public dataLoaded: Boolean = false;
  public id: String;
  public customer;

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

  getCustomerDetail() {
    this.customerService.getById(this.id).subscribe((data) => {
      this.customer = data;
      this.dataLoaded = true;
    });
  }
}
