import { ICustomer } from './contact.model';
import { Channel } from '../enums/channel.enum';

export interface ICommunications {
    date: Date;
    customer: ICustomer;
    channel: Channel
    template: string;
}
