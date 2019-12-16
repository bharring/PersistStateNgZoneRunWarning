import { Component } from '@angular/core';
import { HackerService } from '../services/state/hacker.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  entities$ = this.hacker.query.selectAll();

  constructor(private hacker: HackerService) {}
}
