import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CostumerService } from '../../service/costumer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Costumer } from "../../model/costumer"
import { Observable } from 'rxjs';

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

  constructor(private route: ActivatedRoute, private router: Router, private costumerservice: CostumerService, private fb: FormBuilder) {
    this.costumer = {
      name: {
        first: '',
        last: ''
      },
      gender: 'm',
      birthday: null,
      lastContact: null,
      customerLifetimeValue: null
    };

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      birthday: ['', Validators.required ],
      gender: ['', Validators.required ],
      last_contact: ['', Validators.required ],
      costumer_lifetime_value: ['', Validators.required ]
    });
  }

  addCostumer(costumer: Costumer) {
      this.costumerservice.addCostumer(costumer, this.navigate, {router: this.router});
  }

  navigate(options){
    options.router.navigate(['index']);
  }

  ngOnInit() {
  }

}
