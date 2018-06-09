import { Component, OnInit, Input } from '@angular/core';
import { CostumerService } from '../../service/costumer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Costumer } from "../../model/costumer"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add Costumer';
  angForm: FormGroup;

  @Input()
  costumer: Costumer;

  constructor(private costumerservice: CostumerService, private fb: FormBuilder) {
    this.costumer = {
      name: {
        first: '',
        last: ''
      },
      gender: ''
    };

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ]
    });
  }

  addCostumer(costumer: Costumer) {
      this.costumerservice.addCostumer(costumer);
  }

  ngOnInit() {
  }

}
