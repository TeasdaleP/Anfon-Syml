export interface IContact {
  telephone: string;
  email: string;
}

export interface ICustomer extends IContact {
  reference: string;
}
