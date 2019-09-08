import { TextSendingService } from "./sending-sms.service";

describe('SMS Sending Service', () => {
  let service: TextSendingService;

  beforeEach( () => {
    service = new TextSendingService();
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

});
