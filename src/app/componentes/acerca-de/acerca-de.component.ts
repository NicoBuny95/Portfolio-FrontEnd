import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonaServicioService } from 'src/app/Servicios/persona-servicio.service';
import { TokenService } from 'src/app/Servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = null;
  
  constructor(public personaService: PersonaServicioService, private tokenService: TokenService) { }

isLogged = false;
  ngOnInit(): void {
   this.traerPersona();
   if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  traerPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona=data})
  }
}
