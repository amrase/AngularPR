import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './heros';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl = "../assets/heros.json";

  constructor(private http:HttpClient) { }

  getAllHeros() : Observable<Hero[]>{
    return this.http.get<Hero[]>(this.baseUrl);
  }
}
