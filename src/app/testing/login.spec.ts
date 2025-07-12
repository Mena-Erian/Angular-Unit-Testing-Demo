import { login } from './login';

//suite
describe('login Function', () => {
  it('it can return true', () => {
    //       actual value            Matchers(Expected value)
    expect(login('hamda', 888)).toBeTrue();
  });
  //that in Jasmin Core
  it('it can return false', () => {
    expect(login('hamda', undefined)).toBeFalse();
  });

  it('it can return false option 2', () => {
    expect(login('hamda', 43)).toBeTrue();
  });
});
