import { Injectable } from '@angular/core';

export interface PokemonRules{
  id:number;
  nombre:string;
  imagen:string;
  tipo:string;
  bio:string;
}

@Injectable()
export class PokemonesService {

  pokemones:PokemonRules[] = [
	{
		"id":0,
		"nombre":"Bulbasaur",
		"imagen":"001.png",
		"tipo":"Planta",
		"bio":"Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol."
	},
	{
		"id":1,
		"nombre":"Charmander",
		"imagen":"002.png",
		"tipo":"Fuego",
		"bio":"La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."
	},
	{
		"id":2,
		"nombre":"Squirtle",
		"imagen":"003.png",
		"tipo":"Agua",
		"bio":"El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad."
	},
	{
		"id":3,
		"nombre":"Pikachu",
		"imagen":"004.png",
		"tipo":"Elétrico",
		"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
	}
];


  obtenerPokemones(){
    return this.pokemones;
  }

	obtenerPokemon(id:number){
		let pokeArr = [];

		for(let pokemon of this.pokemones){
			if(pokemon.id == id){
				pokeArr.push(pokemon);
			}
		}

		return pokeArr;
	}

	buscarPokemon(termino:string){
		let pokeArr = [];
		termino = termino.toLowerCase();
		for(let pokemon of this.pokemones){
			let nombre = pokemon.nombre.toLowerCase();
			if(nombre.indexOf(termino) >= 0){
				pokeArr.push(pokemon)
			}
		}

		return pokeArr;
	}

  constructor() { }

}
