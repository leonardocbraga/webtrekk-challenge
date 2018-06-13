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

    static getGenderDescription(customer){
        return Gender[customer.gender];
    }
}

export enum Gender {
    m = 'Man' ,
    w = 'Woman'
}
