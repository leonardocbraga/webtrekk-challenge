import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../../routerConfig';
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Customer } from "../../model/customer"
import { Observable, of } from 'rxjs';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let service: CustomerService;
  let mockCustomers: Customer[];
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
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

    spy = spyOn(service, 'getCustomers').and.returnValue(of(mockCustomers));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the list after getCustomers promise resolves', async() => {
    component.getCustomers();

    fixture.detectChanges();
    fixture.whenStable().then( () => {
        fixture.detectChanges();
        expect(component.customers).toEqual(jasmine.objectContaining(mockCustomers));
    });
  })
});
