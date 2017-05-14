import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPokemonComponent } from './buscador-pokemon.component';

describe('BuscadorPokemonComponent', () => {
  let component: BuscadorPokemonComponent;
  let fixture: ComponentFixture<BuscadorPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
