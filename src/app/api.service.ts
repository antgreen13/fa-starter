import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Character } from './data/data-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:5000';  // URL to REST API
  constructor(private http: HttpClient) { }

  public getCharacters(userEmail: string): Observable<any> {
    const url = `${this.apiUrl}/list?userEmail=${userEmail}`;
    return this.http.get<any>(url);
  }
}
