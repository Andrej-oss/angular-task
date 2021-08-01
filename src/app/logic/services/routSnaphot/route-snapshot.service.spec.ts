import { TestBed } from '@angular/core/testing';

import { RouteSnapshotService } from './route-snapshot.service';

describe('RouteSnapshotService', () => {
  let service: RouteSnapshotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteSnapshotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
