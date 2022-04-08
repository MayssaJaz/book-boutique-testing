import { TestBed } from '@angular/core/testing';

import { BookHandlerService } from './book-handler.service';

describe('BookHandlerService', () => {
  let service: BookHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
