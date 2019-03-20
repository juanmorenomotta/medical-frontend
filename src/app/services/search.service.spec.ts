import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';


describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [SearchService, ]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
