import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonaServicioService } from 'src/app/Servicios/persona-servicio.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","");
  
  constructor(public personaService: PersonaServicioService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }


}
