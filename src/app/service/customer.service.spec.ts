import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { Customer } from '../model/customer';

let testService: CustomerService;
let mockCustomer: Customer, mockCustomer2: Customer;
let responsePropertyNames, expectedPropertyNames;

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService],
      imports: [HttpClientModule]
    });

    testService= TestBed.get(CustomerService);
    mockCustomer = {
        _id: '111',
        name: {
            first: 'mock first name 1',
            last: 'mock last name 1'
        },
        birthday: new Date(2018, 1, 1),
        gender: 'm',
        lastContact: new Date(2018, 1, 1, 30, 30),
        customerLifetimeValue: 2.5
    };
    mockCustomer2 = { 
      _id: '999',
        name: {
            first: 'mock first name 2',
            last: 'mock last name 2'
        },
        birthday: new Date(2018, 1, 1),
        gender: 'm',
        lastContact: new Date(2018, 1, 1, 30, 30),
        customerLifetimeValue: 2.5
    };
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
