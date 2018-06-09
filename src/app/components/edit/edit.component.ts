import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CostumerService } from './../../service/costumer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Costumer } from "../../model/costumer"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  costumer: any;

  angForm: FormGroup;
  title = 'Edit Costumer';

  constructor(private route: ActivatedRoute, private router: Router, private service: CostumerService, private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      this.costumer = this.service.editCostumer(params['id']).subscribe(res => {
        this.costumer = res;
       
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

  updateCostumer(costumer) {
    this.route.params.subscribe(params => {
      this.service.updateCostumer(costumer, params['id']);
      this.router.navigate(['index']);
    });
  }

  deleteCostumer(id) {
    this.service.deleteCostumer(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    
  }

}
