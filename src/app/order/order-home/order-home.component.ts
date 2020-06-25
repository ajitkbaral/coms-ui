import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss'],
})
export class OrderHomeComponent implements OnInit {
  public orders = [];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  goToOrderPage(id: string): void {
    this.router.navigate(['orders', 'detail', id]);
  }
}
