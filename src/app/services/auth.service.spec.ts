import { AuthService } from './auth.service';

describe('Auth Service', () => {
  it('should set the name of the logged in user', () => {
    const service = new AuthService();
    expect(service.getUser()).toBeUndefined();
    service.loginUserByName('test');
    expect(service.getUser()).toEqual('test');
  });
});
