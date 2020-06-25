import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomerData(
    page: Number = 1,
    limit: Number = 10
  ): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(
      environment.baseApiUrl + `api/customers?page=${page}&limit=${limit}`
    );
  }

  getById(id: String): Observable<any> {
    return this.http.get<any>(environment.baseApiUrl + `api/customers/${id}`);
  }
}
