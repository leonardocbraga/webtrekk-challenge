import { Component, OnInit } from '@angular/core';
import { CostumerService } from '../../service/costumer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add Costumer';
  angForm: FormGroup;

  constructor(private costumerservice: CostumerService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ]
   });
  }
  addCoin(first_name, last_name) {
      this.costumerservice.addCostumer({name: {first: first_name, last: last_name}});
  }

  ngOnInit() {
  }

}
