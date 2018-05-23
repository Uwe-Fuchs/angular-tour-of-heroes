import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    var heroesLocal = of(HEROES);
    this.messageService.add('HeroService: fetched heroes !!!');
    return heroesLocal;
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    var heroLocal = of(HEROES.find(hero => hero.id === id));
    this.messageService.add(`HeroService: fetched hero id=${id} !!!`);
    return heroLocal;
  }

  constructor(private messageService: MessageService) {
  }
}
