
export enum Channel {
  SMS = "SMS",
  Email = "Email"
}

export interface IContent {
    id: string;
    channel: Channel;
    content: string;
}
