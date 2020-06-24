import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  placeOrder(orderDetails): Observable<any> {
    return this.http.post<any>(
      environment.baseApiUrl + `api/orders`,
      orderDetails
    );
  }
}
