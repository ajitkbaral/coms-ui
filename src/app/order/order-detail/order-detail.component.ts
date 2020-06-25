import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order;

  constructor(
    private orderSerivce: OrderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const orderId = params['id'];
      this.getOrder(orderId);
    });
  }

  getOrder(id): void {
    this.orderSerivce.getOrderById(id).subscribe(
      (res) => {
        this.order = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteOrder(): void {
    this.orderSerivce.deleteOrder(this.order._id).subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
