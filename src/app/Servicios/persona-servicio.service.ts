import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  Url= ' https://portfoback.herokuapp.com/personas/';
  httpClient: any;

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.Url+ 'traer/perfil');
  }

  updatePersona(persona:Persona, id: number){
    return this.http.put<Persona>(this.Url+`editar/${id}`,persona);
  }
}
