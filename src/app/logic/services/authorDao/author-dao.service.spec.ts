import { TestBed } from '@angular/core/testing';

import { AuthorDaoService } from './author-dao.service';

describe('AuthorDaoService', () => {
  let service: AuthorDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
