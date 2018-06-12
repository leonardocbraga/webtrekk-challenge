import { CustomerService } from './../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  customers: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private service: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.service.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      console.log('Deleted');
      //this.router.navigate(['index']);
      this.getCustomers();
    });
  }
}
