import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from '../messages/messages.service';
import { HeroesService } from './heroes.service';
import { Hero } from './heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros : Hero[];
  selectedHero : Hero;
  error : string;

  constructor(private herosService:HeroesService,private messageService:MessagesService) { }

  getAllHeros(){
    this.herosService.getAllHeros().subscribe(
      heros => this.heros=heros,
      error => this.error = error
    )
  }

  onSelectHero(hero:Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
    this.messageService.add("Heros Component: Selected hero id " + this.selectedHero.id)
  }

  ngOnInit(): void {
    this.getAllHeros(); 
  }

}
