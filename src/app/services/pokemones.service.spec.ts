import { TestBed, inject } from '@angular/core/testing';

import { PokemonesService } from './pokemones.service';

describe('PokemonesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonesService]
    });
  });

  it('should ...', inject([PokemonesService], (service: PokemonesService) => {
    expect(service).toBeTruthy();
  }));
});
