import { Component, OnInit } from '@angular/core';
import {Videojuego} from 'src/app/entidades/videojuego';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null
  
  // Los videojuegos tendran un identificador, un titulo, una compañia y una valoración media.
  id: number = 0
  titulo: string = ""
  company: string = ""
  imagen: string = ""
  valMedia: number = 0

  constructor() {
    let videojuego : Videojuego = new Videojuego(1,"Mario Kart","Nintengo" ,"/assets/images/super-mario.png", 5)
    let videojuego2 : Videojuego = new Videojuego(2,"Fifa21","Xbox" ,"/assets/images/nintendo-switch.png", 4)
    let videojuego3 : Videojuego = new Videojuego(3,"Zelda","Nintendo" ,"/assets/images/zelda.png", 3)
    this.listaVideojuegos.push(videojuego);
    this.listaVideojuegos.push(videojuego2);
    this.listaVideojuegos.push(videojuego3);
   }

    ngOnInit() {
  
    }
}
