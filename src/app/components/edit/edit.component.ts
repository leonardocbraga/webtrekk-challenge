import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../service/customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Customer } from "../../model/customer"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  customer: any;

  angForm: FormGroup;
  title = 'Edit Customer';

  constructor(private route: ActivatedRoute, private router: Router, private service: CustomerService, private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      this.customer = this.service.editCustomer(params['id']).subscribe(res => {
        this.customer = res;
       
      });
    });

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ]
   });
  }

  updateCustomer(customer) {
    this.route.params.subscribe(params => {
      this.service.updateCustomer(customer, params['id']);
      this.router.navigate(['index']);
    });
  }

  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    
  }

}
