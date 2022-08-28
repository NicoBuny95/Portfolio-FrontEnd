import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

   private apiServerUrl = '*';

  constructor(private http: HttpClient) {}

  public getSkill(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.apiServerUrl}/api/skill`);
  }
  public addSkill(skill: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.apiServerUrl}/api/skill`, skill);
  }

  public updateSkill(skill: Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.apiServerUrl}/api/skill`, skill);
  }
  public deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/skill/${skillId}`);
  }
}
