import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {

	heroes: Hero[]; 
	selectedHero: Hero;

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = this.selectedHero === hero ? null : hero;
	}
}