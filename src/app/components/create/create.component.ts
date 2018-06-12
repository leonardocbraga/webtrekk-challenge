import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Customer } from "../../model/customer"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add Customer';
  angForm: FormGroup;

  @Input()
  customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private customerservice: CustomerService, private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      
      if(params['id']){
        this.customer = this.customerservice.editCustomer(params['id']).subscribe(res => {
          this.customer = res;
          console.log(this.customer);
        });
      }else{
        this.customer = {
          name: {
            first: '',
            last: ''
          },
          gender: 'm',
          birthday: null,
          lastContact: null,
          customerLifetimeValue: null
        };
      }
    });

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      birthday: ['', Validators.required ],
      gender: ['', Validators.required ],
      last_contact: ['', Validators.required ],
      customer_lifetime_value: ['', Validators.required ]
    });
  }

  addCustomer(customer: Customer) {
      this.customerservice.addCustomer(customer, this.navigate, {router: this.router});
  }

  navigate(options){
    options.router.navigate(['index']);
  }

  ngOnInit() {
  }

}
