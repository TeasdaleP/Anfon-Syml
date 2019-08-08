import { IContact } from './contact.model';
import { ITemplates } from './template.model';
import { ICommunications } from './communications.model';

export interface IUsers {
    id: string;
    firstName: string;
    surname: string;
    contact: IContact;
    template: Array<ITemplates>;
    communications: Array<ICommunications>;
}
