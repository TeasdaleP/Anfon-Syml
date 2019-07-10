import { IContact } from './contact.model';

export interface ICustomer {
    id: string;
    fullname: string;
    contact: Array<IContact>;
}
