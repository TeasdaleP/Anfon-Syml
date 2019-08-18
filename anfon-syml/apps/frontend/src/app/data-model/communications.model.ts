import { ICustomer } from './contact.model';

export interface ICommunications {
    date: string;
    customer: ICustomer;
    template: Array<string>;
}
