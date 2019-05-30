import { TestBed } from '@angular/core/testing';

import { MyUserServServiceService } from './my-user-serv-service.service';

describe('MyUserServServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyUserServServiceService = TestBed.get(MyUserServServiceService);
    expect(service).toBeTruthy();
  });
});
