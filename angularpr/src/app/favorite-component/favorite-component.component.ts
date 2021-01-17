import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.css']
})
export class FavoriteComponentComponent implements OnInit {

  @Input() isFavorite:boolean;

  @Output() change = new EventEmitter();
  constructor() { }

  onClick($event){
    // this.isFavorite = !this.isFavorite
    this.change.emit;
  }

  ngOnInit(): void {
  }

}
