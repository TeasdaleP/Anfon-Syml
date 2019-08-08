import { IContent } from './content.model';

export interface ITemplates {
    id: string;
    title: string;
    dateCreated: string;
    content: Array<IContent>;
}
