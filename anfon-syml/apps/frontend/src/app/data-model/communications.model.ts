import { IContent } from './content.model';
import { ICustomer } from './customer.model';

export interface ICommunications {
    id: string;
    customer: ICustomer;
    dateSent:  string;
    content: IContent;
}
