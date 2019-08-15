import { IContact } from "./contact.model";

export interface ICustomer extends IContact {
  reference: string;
}
