import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerData } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers():Observable<CustomerData>{
    return this.http.get<CustomerData>(`http://localhost:3000/api/customer`, {responseType: 'json'});
  };

}
