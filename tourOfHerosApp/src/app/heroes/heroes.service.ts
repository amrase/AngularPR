import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from '../messages/messages.service';
import { Hero } from './heros';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl = 'api/heroes';

  constructor(private http:HttpClient,private  msgService:MessagesService) { }

  getAllHeros() : Observable<Hero[]>{
    this.msgService.add("Hero Added: fetched heros")
    return this.http.get<Hero[]>(this.baseUrl);
  }
}
