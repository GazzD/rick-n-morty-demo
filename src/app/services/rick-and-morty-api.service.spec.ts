import { TestBed } from '@angular/core/testing';

import { RickAndMortyAPIService } from './rick-and-morty-api.service';

describe('RickAndMortyAPIService', () => {
  let service: RickAndMortyAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
