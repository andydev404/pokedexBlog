import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {PokemonesComponent} from "./components/pokemones/pokemones.component";
import {PokemonInfoComponent} from "./components/pokemon-info/pokemon-info.component";
import {BuscadorPokemonComponent} from "./components/buscador-pokemon/buscador-pokemon.component"

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemones', component: PokemonesComponent },
    { path: 'pokemon/:id', component: PokemonInfoComponent },
    { path: 'buscar/:nombre', component: BuscadorPokemonComponent },
    { path: '**', redirectTo:"home" }

];

export const POKE_ROUTING = RouterModule.forRoot(routes);