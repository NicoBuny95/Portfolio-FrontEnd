import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {
 Url=' http://localhost:8080/personas/'
// Url= ' https://portfoback.herokuapp.com/personas/';
  httpClient: any;

  constructor(private http: HttpClient) { }


  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.Url + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.Url + `detail/${id}`);
  }

  /*public save(skill: Persona): Observable<any>{
    return this.http.post<any>(this.Url + 'create', skill);
  }*/

  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.Url + `update/${id}`, persona);
  }

 /* public delete(id: number): Observable<any>{
    return this.http.delete(this.Url + `delete/${id}`);
  }*/
}
