import { Injectable } from '@angular/core';
import { ID, selectPersistStateInit } from '@datorama/akita';
import { HackerStore } from './hacker.store';
import { Hacker } from './hacker.model';
import { HackerQuery } from './hacker.query';
import { random, hacker } from 'faker';
import { storeSize } from './store-size';

@Injectable({ providedIn: 'root' })
export class HackerService {

  constructor(private hackerStore: HackerStore, public query: HackerQuery) {
    selectPersistStateInit().subscribe(() => this.get());
  }

  get() {
    for (let i = this.query.getAll().length; i < storeSize; i++) {
      this.add({
        id: random.number(),
        abbreviation: hacker.abbreviation(),
        adjective: hacker.adjective(),
        noun: hacker.noun(),
      });
    }
  }

  add(h: Hacker) {
    this.hackerStore.add(h);
  }

  update(id, h: Partial<Hacker>) {
    this.hackerStore.update(id, h);
  }

  remove(id: ID) {
    this.hackerStore.remove(id);
  }
}
