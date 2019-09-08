import { EmailSendingService } from "./sending-email.service";

describe('Email Sending Service', () => {
  let service: EmailSendingService;

  beforeEach( () => {
    service = new EmailSendingService();
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

});
