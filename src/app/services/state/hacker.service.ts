import { Injectable } from '@angular/core';
import { ID, selectPersistStateInit } from '@datorama/akita';
import { HackerStore } from './hacker.store';
import { Hacker } from './hacker.model';
import { HackerQuery } from './hacker.query';
import { random, hacker } from 'faker';

@Injectable({ providedIn: 'root' })
export class HackerService {
  entities$ = this.query.selectAll();

  constructor(private hackerStore: HackerStore, public query: HackerQuery) {
    selectPersistStateInit().subscribe(() => {
      const all = this.query.getAll();
      if (all.length === 0) {
        this.get();
      }
    });
  }

  get() {
    for (let i = 0; i < 20; i++) {
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
