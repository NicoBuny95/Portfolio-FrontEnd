import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../experiencia';

@Injectable({
  providedIn: 'root'
})
export class ServicioExpService {

 

  constructor(private httpClient:HttpClient) { }
  baseUrl=' http://localhost:8080/experiencias/'
 //baseUrl=' https://portfoback.herokuapp.com/experiencias/';


mostrarExpe():Observable<Experiencia[]>{
   return this.httpClient.get<Experiencia[]>(`${this.baseUrl}ver`);
 }
 agregarExpe(expe :Experiencia ):Observable<Object>{
   return this.httpClient.post<Experiencia>(`${this.baseUrl}Registrar`,expe);
 }

 getExpeId(id:number): Observable<Experiencia>{
   return this.httpClient.get<Experiencia>(this.baseUrl+`mostrar/${id}`);
 }
 updateExp(expe:Experiencia, id: number){
   return this.httpClient.put<Experiencia>(this.baseUrl+`editar/${id}`,expe);
 }
 deleteExp(id:number ): Observable<any>{
   return this.httpClient.delete<any>(this.baseUrl+`borrar/${id}`);
 }

}
