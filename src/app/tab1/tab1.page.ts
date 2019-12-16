import { Component } from '@angular/core';
import { RandomService } from '../services/state/random.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  entities$ = this.random.entities$;

  constructor(private random: RandomService) {}

}
