import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Superman', 'Batman', 'Flash', 'Canary' ];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero =  this.heroNames.pop();
  }

  public addHero(heroName: string): void {
    this.heroNames.push(heroName);
  }
}
