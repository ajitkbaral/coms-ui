import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl = environment.baseApiUrl + 'api/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<any> {
    return this.http.get<any>(this.orderUrl);
  }

  getOrderById(id: string): Observable<any> {
    return this.http.get<any>(`${this.orderUrl}/${id}`);
  }

  updateOrder(id: string, orderDetails): Observable<any> {
    return this.http.put<any>(`${this.orderUrl}/${id}`, orderDetails);
  }

  placeOrder(orderDetails): Observable<any> {
    return this.http.post<any>(this.orderUrl, orderDetails);
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete<any>(`${this.orderUrl}/${id}`);
  }
}
