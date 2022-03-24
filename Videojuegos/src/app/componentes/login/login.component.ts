import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios : Usuario[] = []
  Usuario : Usuario | null = null

  //validaciones
  usuarioObligatorio = true
  passObligatorio = true
  passwordIncorrecta = true
  noExisteUsuario = true

  // Los videojuegos tendran un identificador, un titulo, una compañia y una valoración media.
  email:string ="";
  pass:string ="";


  constructor(private router:Router){
    let usuario : Usuario = new Usuario("KarolC" ,"1234")
    this.listaUsuarios.push(usuario);

    let usuario2 : Usuario = new Usuario("Conce" ,"1234")
    this.listaUsuarios.push(usuario2);

    let usuario3 : Usuario = new Usuario("Diego" ,"1234")
    this.listaUsuarios.push(usuario3);
  }
  public ocultarMensajesError(){
    this.usuarioObligatorio = true
    this.passObligatorio = true
  } 

  public hayErroresEnFormulario():boolean{
    let error : boolean = false
    this.ocultarMensajesError()

    if(this.email.trim().length==0){
      this.usuarioObligatorio = false
      error = true
    }
    
    if(this.pass.trim().length==0){
      this.passObligatorio = false
      error = true
    }
    return error
  }

  login(){
    let userCorrecto = false;
    if(!this.hayErroresEnFormulario()){
    for(let i=0; i<this.listaUsuarios.length; i++){
      let usuarioAux : Usuario = this.listaUsuarios[i]
      if(usuarioAux.email !== this.email){
        this.noExisteUsuario = false
      }else{
        if(usuarioAux.email == this.email && usuarioAux.pass != this.pass){
          this.passwordIncorrecta = false
        }else{
          if(usuarioAux.email == this.email && usuarioAux.pass == this.pass){
            userCorrecto = true;
            this.router.navigate(["/listadoVideojuegos"])
          }
        }
      }
      
    }
  }
  }

  ngOnInit(): void {
  }

}
