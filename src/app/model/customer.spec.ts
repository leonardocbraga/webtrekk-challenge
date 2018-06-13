import { Customer } from './customer';

describe('Customer', () => {
    it('should create an instance of Customer',() => {
        expect(new Customer()).toBeTruthy();
    });
})

it('should accept values', () => {
    let customer = new Customer();
    customer = {
        _id: '111',
        name: {
            first: 'mock first name',
            last: 'mock last name'
        },
        birthday: new Date(2018, 1, 1),
        gender: 'm',
        lastContact: new Date(2018, 1, 1, 30, 30),
        customerLifetimeValue: 2.5
    }
    expect(customer._id).toEqual('111');
    expect(customer.name.first).toEqual('mock first name');
    expect(customer.name.last).toEqual('mock last name');
    expect(customer.birthday).toEqual(new Date(2018, 1, 1));
    expect(customer.gender).toEqual('m');
    expect(customer.lastContact).toEqual(new Date(2018, 1, 1, 30, 30));
    expect(customer.customerLifetimeValue).toEqual(2.5);
});