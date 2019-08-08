import { IContact } from "./contact.model";

export interface ICustomer {
  customerRef: string;
  contact: IContact;
}
