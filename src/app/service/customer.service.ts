import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  result: any;
  constructor(private http: HttpClient) {}

  addCustomer(customer, callback?, options?) {
    const uri = '/customers/add';
  
    this
      .http
      .post(uri, customer)
      .subscribe(res =>
          callback ? callback(options) : console.log('Done'));
  }

  getCustomers() {
    const uri = '/customers/';
    return this
            .http
            .get(uri)
            .pipe(
              map(res => {
                return res;
              })
            );
  }

  editCustomer(id) {
    const uri = '/customers/edit/' + id;
    return this
            .http
            .get(uri)
            .pipe(
              map(res => {
                return res;
              })
            );
  }

  updateCustomer(customer, id, callback?, options?) {
    const uri = '/customers/update/' + id;

    this
      .http
      .post(uri, customer)
      .subscribe(res => callback ? callback(options) : console.log('Done'));
  }

  deleteCustomer(id) {
    const uri = '/customers/delete/' + id;

        return this
            .http
            .get(uri)
            .pipe(
              map(res => {
                return res;
              })
            );
  }
}
