// import { TestBed } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';
import { Clients } from './clients';

// import { Clients } from './clients';

// describe('Clients', () => {
//   let service: Clients;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(Clients);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('Client Service', () => {
  let service: Clients;

  beforeEach(() => {
    service = TestBed.inject(Clients);
  });

  it('Should Be Created', () => {
    expect(service).toBeTruthy();
  });

  it('it can return false', () => {
    expect(service.login('hamda', undefined)).toBeFalse();
  });
});
