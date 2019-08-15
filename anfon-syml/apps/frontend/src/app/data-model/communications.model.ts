import { ICustomer } from './customer.model';

export interface ICommunications {
    date: string;
    customer: ICustomer;
    template: Array<string>;
}
