import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Character } from './data/data-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private flaskUrl = 'http://localhost:5000/firebase'; // URL to REST API
  private dndApiUrl = 'https://www.dnd5eapi.co/api'; // URL to Dnd 5e API
  constructor(private http: HttpClient) {}

  public getCharacters(
    userEmail: string,
    characterName?: string
  ): Observable<Character | Character[]> {
    const endpoint = `${this.flaskUrl}/list?userEmail=${userEmail}&characterName=${characterName}`;
    return this.http.get<any>(endpoint);
  }

  public saveCharacter(character: Character): Observable<Character> {
    const endpoint = `${this.flaskUrl}/saveCharacter`;
    return this.http.post<any>(endpoint, character, httpOptions);
  }

  public deleteCharacter(userEmail: string, characterName: string) {
    const endpoint = `${this.flaskUrl}/delete?userEmail=${userEmail}&characterName=${characterName}`;
    return this.http.delete<any>(endpoint);
  }

  public getAttribute(attribute: string): Observable<any> {
    const endpoint = `${this.dndApiUrl}/ability-scores/${attribute}`;
    return this.http.get<any>(endpoint);
  }
}
