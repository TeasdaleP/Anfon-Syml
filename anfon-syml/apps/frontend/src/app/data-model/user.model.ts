import { IContact } from './contact.model';
import { ITemplates } from './template.model';
import { ICommunications } from './communications.model';

export interface IUsers {
    id: string;
    firstname: string;
    surname: string;
    contact: IContact;
    password: string;
    templates: Array<ITemplates>;
    communications: Array<ICommunications>;
}
