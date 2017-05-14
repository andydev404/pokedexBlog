import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import {PokemonesService} from "../../services/pokemones.service"

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styles: []
})
export class PokemonInfoComponent implements OnInit {

  pokemon:any[] = [];

  constructor(private ParamsRouter:ActivatedRoute, private pokemonServicio:PokemonesService) {
      this.ParamsRouter.params.subscribe(params=>{
        this.pokemon = this.pokemonServicio.obtenerPokemon(params['id']);
        console.log(this.pokemon)
      })
   }



  ngOnInit() {
  }

}
