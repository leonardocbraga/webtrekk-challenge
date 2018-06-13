import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { CreateComponent } from './create.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../../routerConfig';
import { RouterTestingModule } from '@angular/router/testing'
import { CustomerService } from '../../service/customer.service';
import { Customer } from "../../model/customer"

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let service: CustomerService;
  let mockCustomers: Customer[];
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = fixture.debugElement.injector.get(CustomerService);

    mockCustomers = [{
      _id: '111',
      name: {
          first: 'mock first name',
          last: 'mock last name'
      },
      birthday: new Date(2018, 1, 1),
      gender: 'm',
      lastContact: new Date(2018, 1, 1, 30, 30),
      customerLifetimeValue: 2.5
    }];

    spy = spyOn(service, 'getCustomers').and.returnValue(Promise.resolve(mockCustomers));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
