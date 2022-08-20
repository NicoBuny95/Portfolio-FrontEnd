import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudio } from 'src/app/estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEduService {

  constructor(private httpClient:HttpClient) { }
  baseUrl='http://localhost:8080/educacion/';


mostrarEstudios():Observable<Estudio[]>{
   return this.httpClient.get<Estudio[]>(`${this.baseUrl}ver`);
 }
 agregarEstudio(estudio :Estudio ):Observable<Object>{
   return this.httpClient.post<Estudio>(`${this.baseUrl}Registrar`,estudio);
 }

 getEstudioId(id:number): Observable<Estudio>{
   return this.httpClient.get<Estudio>(this.baseUrl+`mostrar/${id}`);
 }
 updateEstudio(estudio:Estudio, id: number){
   return this.httpClient.put<Estudio>(this.baseUrl+`editar/${id}`,estudio);
 }
 deleteEstudios(id:number ): Observable<any>{
   return this.httpClient.delete<any>(this.baseUrl+`borrar/${id}`);
 }
}
