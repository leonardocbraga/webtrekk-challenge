export class Customer {
    _id?: string;
    name: {
        first: string;
        last: string;
    }
    birthday: Date;
    gender: string;
    lastContact: Date;
    customerLifetimeValue: number;
}
