import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HackerStore, HackerState } from './hacker.store';
import { Hacker } from './hacker.model';

@Injectable({
  providedIn: 'root'
})
export class HackerQuery extends QueryEntity<HackerState, Hacker> {

  constructor(protected store: HackerStore) {
    super(store);
  }

}
