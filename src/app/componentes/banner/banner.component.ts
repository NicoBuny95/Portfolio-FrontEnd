import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonaServicioService } from 'src/app/Servicios/persona-servicio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: Persona = new Persona("","","","");
  
  constructor(public personaService: PersonaServicioService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }


}
