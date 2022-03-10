import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero:Hero = { id: 1, name:'Windstorm'};
  heroes: Array<Hero> = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
