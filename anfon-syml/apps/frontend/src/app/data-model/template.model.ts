import { Channel } from '../enums/channel.enum';

export interface ITemplates {
    title: string;
    date: Date;
    channel: Channel
    content: string;
}
