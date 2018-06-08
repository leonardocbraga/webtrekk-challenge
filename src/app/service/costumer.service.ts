import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  result: any;
  constructor(private http: HttpClient) {}

  addCostumer(costumer) {
    const uri = 'http://localhost:8080/costumers/add';
  
    this
      .http
      .post(uri, costumer)
      .subscribe(res =>
          console.log('Done'));
  }

  getCostumers() {
    const uri = 'http://localhost:8080/costumers';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCostumer(id) {
    const uri = 'http://localhost:8080/costumers/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCostumer(costumer, id) {
    const uri = 'http://localhost:8080/costumers/update/' + id;

    this
      .http
      .post(uri, costumer)
      .subscribe(res => console.log('Done'));
  }

  deleteCostumer(id) {
    const uri = 'http://localhost:8080/costumers/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
