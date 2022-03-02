import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyAPIService {

  private readonly baseURL: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/character');
  }


}
