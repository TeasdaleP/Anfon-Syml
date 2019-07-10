import { IContent } from './content.model';

export interface ITemplates {
    id: string;
    title: string;
    dateCrate: Date;
    content: Array<IContent>;
}
