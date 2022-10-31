import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonaServicioService } from 'src/app/Servicios/persona-servicio.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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
