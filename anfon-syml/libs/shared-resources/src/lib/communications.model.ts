import { IContent } from './content.model';
import { ICustomer } from './customer.model';

export interface ICommunications {
    id: string;
    customer: Array<ICustomer>;
    dateSent:  Date;
    content: Array<IContent>;
}
