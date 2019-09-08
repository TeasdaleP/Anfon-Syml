import { UsernameService } from "./username.service";

describe('Username Service', () => {
  let service: UsernameService;

  beforeEach( () => {
    service = new UsernameService();
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Shouldnt retrieve a user if it hasnt been set', () => {
    const noUser = service.getUser()
    expect(noUser).toBeUndefined();
  });

  it('Should retrieve the same user if its been set', () => {
    service.setUser('name');
    const actualUser = service.getUser()
    expect(actualUser).toBe('name');
  });
});
