import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl = environment.baseApiUrl + 'api/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.orderUrl);
  }

  getOrderById(id: string): Observable<any> {
    return this.http.get<any>(`${this.orderUrl}/${id}`);
  }

  updateOrder(id: string, orderDetails): Observable<Order> {
    return this.http.put<Order>(`${this.orderUrl}/${id}`, orderDetails);
  }

  placeOrder(orderDetails): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, orderDetails);
  }

  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this.orderUrl}/${id}`);
  }
}
