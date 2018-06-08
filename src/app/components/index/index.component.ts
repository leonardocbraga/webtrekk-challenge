import { CostumerService } from './../../service/costumer.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  costumers: any;

  constructor(private http: HttpClient, private service: CostumerService) {}

  ngOnInit() {
    this.getCostumers();
  }

  getCostumers() {
    this.service.getCostumers().subscribe(res => {
      this.costumers = res;
    });
  }

}
