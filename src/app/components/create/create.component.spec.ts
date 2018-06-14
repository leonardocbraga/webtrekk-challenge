import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
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
  let mock: Customer;
  let spy: jasmine.Spy;
  let de: DebugElement;
  let element: HTMLElement;

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
    de = fixture.debugElement.query(By.css('.panel'));
    element = de.nativeElement;

    mock = {
      _id: '111',
      name: {
          first: 'mock first name',
          last: 'mock last name'
      },
      birthday: new Date(2018, 1, 1),
      gender: 'm',
      lastContact: new Date(2018, 1, 1, 30, 30),
      customerLifetimeValue: 2.5
    };

    spy = spyOn(service, 'addCustomer').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all the buttons when creating',() => {
    expect(element.innerHTML).toContain('Add');
    expect(element.innerHTML).toContain('Back');
  });

  it('should have all the buttons when editing',() => {
    component.customer = mock;

    fixture.detectChanges();

    expect(element.innerHTML).toContain('Update');
    expect(element.innerHTML).toContain('Back');
  });

  it('should call component by clicking on Add Button and call service', () => {
    component.customer._id = null;

    fixture.detectChanges();

    let addButton = fixture.debugElement.query(By.css(".btn-primary"));
    //create a spy on the createPaste  method
    spyOn(component,"addCustomer").and.callThrough();
    
    //triggerEventHandler simulates a click event on the button object
    addButton.triggerEventHandler('click', null);
    
    //spy checks whether the method was called
    expect(component.addCustomer).toHaveBeenCalled();
    
    expect(service.addCustomer).toHaveBeenCalled();
  });
});
