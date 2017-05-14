import { Component, OnInit } from '@angular/core';


//Servicios
import {PokemonesService,PokemonRules} from "../../services/pokemones.service"

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: []
})
export class PokemonesComponent implements OnInit {

  pokemones:PokemonRules[] = [];
  constructor(private _pokemones:PokemonesService) { }

  ngOnInit() {
    this.pokemones = this._pokemones.obtenerPokemones();
  }

}
