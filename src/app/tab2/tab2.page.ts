import { Component } from '@angular/core';
import { NameService } from '../services/state/name.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  entities$ = this.name.entities$;

  constructor(private name: NameService) {}

}
