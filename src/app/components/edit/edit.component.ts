import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CostumerService } from './../../service/costumer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  costumer: any;
  angForm: FormGroup;
  title = 'Edit Costumer';
  constructor(private route: ActivatedRoute, private router: Router, private service: CostumerService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateCostumer(first_name, last_name) {
    this.route.params.subscribe(params => {
      this.service.updateCostumer({name: {first: first_name, last: last_name}}, params['id']);
      this.router.navigate(['index']);
    });
  }

  deleteCostumer(id) {
    this.service.deleteCostumer(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.costumer = this.service.editCostumer(params['id']).subscribe(res => {
        this.costumer = res;
      });
    });
  }

}
