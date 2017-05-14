import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit() {
  }

  buscarPokemon(termino:string){
    this.rutas.navigate(['buscar',termino]);
  }

}
