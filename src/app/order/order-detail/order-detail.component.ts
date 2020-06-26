import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, ShippingAddress, Order } from 'src/app/interface/interface';
import { AlertService } from 'src/app/services/alert.service';
import { AlertType } from 'src/app/enums/enum';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  public shippingAddress: ShippingAddress;
  public order: Order;
  public customer: Customer;
  public itemsPerPage: number = 4;
  public page: number = 1;

  constructor(
    private orderSerivce: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const orderId = params['id'];
      this.getOrder(orderId);
    });
  }

  getOrder(id): void {
    this.orderSerivce.getOrderById(id).subscribe(
      (orderResponse) => {
        this.order = orderResponse;
        this.customer = orderResponse.customer;
        this.shippingAddress = {
          streetAddress: orderResponse.streetAddress,
          city: orderResponse.city,
          state: orderResponse.state,
          zipCode: orderResponse.zipCode,
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteOrder(): void {
    this.orderSerivce.deleteOrder(this.order._id).subscribe(
      (res) => {
        this.alertService.showAlertDialog({
          title: 'Success.',
          message: 'Order deleted successfully',
          type: AlertType.SUCCESS,
        });
        this.router.navigate(['orders']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteProduct(id: string): void {
    let productIndex;
    this.order.products.filter((product, index) => {
      if (product._id === id) {
        productIndex = index;
        return true;
      }
      return false;
    });
    this.order.products.splice(productIndex, 1);
  }

  editOrder(addressInfo: ShippingAddress): void {
    this.orderSerivce
      .updateOrder(this.order._id, {
        products: this.order.products,
        ...addressInfo,
      })
      .subscribe(
        (order) => {
          this.alertService.showAlertDialog({
            title: 'Update.',
            message: 'Order updated successfully',
            type: AlertType.WARNING,
          });
          this.router.navigate(['orders', 'detail', this.order._id], {
            queryParams: { success: true },
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
