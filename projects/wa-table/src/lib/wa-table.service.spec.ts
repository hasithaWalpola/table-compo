import { TestBed } from '@angular/core/testing';

import { WaTableService } from './wa-table.service';

describe('WaTableService', () => {
  let service: WaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
