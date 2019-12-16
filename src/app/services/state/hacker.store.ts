import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Hacker } from './hacker.model';

export interface HackerState extends EntityState<Hacker> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'hacker' })
export class HackerStore extends EntityStore<HackerState, Hacker> {

  constructor() {
    super();
  }

}

