import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../proyecto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProyService {

  constructor(private httpClient:HttpClient) { }
  baseUrl=' https://portfoback.herokuapp.com/Proyectos/';


mostrarProyectos():Observable<Proyecto[]>{
   return this.httpClient.get<Proyecto[]>(`${this.baseUrl}ver`);
 }
 agregarProyecto(proy :Proyecto ):Observable<Object>{
   return this.httpClient.post<Proyecto>(`${this.baseUrl}Registrar`,proy);
 }

 getProyectoId(id:number): Observable<Proyecto>{
   return this.httpClient.get<Proyecto>(this.baseUrl+`mostrar/${id}`);
 }
 updateProyecto(proy:Proyecto, id: number){
   return this.httpClient.put<Proyecto>(this.baseUrl+`editar/${id}`,proy);
 }
 deleteProyecto(id:number ): Observable<any>{
   return this.httpClient.delete<any>(this.baseUrl+`borrar/${id}`);
 }
}
