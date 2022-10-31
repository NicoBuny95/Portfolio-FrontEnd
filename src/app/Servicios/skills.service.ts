import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

 Url=' http://localhost:8080/skill/'
  // Url=' https://portfoback.herokuapp.com/skill/';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Skills[]>{
    return this.http.get<Skills[]>(this.Url + 'lista');
  }

  public detail(id: number): Observable<Skills>{
    return this.http.get<Skills>(this.Url + `detail/${id}`);
  }

  public save(skill: Skills): Observable<any>{
    return this.http.post<any>(this.Url + 'create', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.http.put<any>(this.Url + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(this.Url + `delete/${id}`);
  }
}
