import { Injectable } from '@angular/core';
import { ID, selectPersistStateInit } from '@datorama/akita';
import { RandomStore } from './random.store';
import { Random } from './random.model';
import { random } from 'faker';
import { RandomQuery } from './random.query';

@Injectable({ providedIn: 'root' })
export class RandomService {
  entities$ = this.query.selectAll();

  constructor(private randomStore: RandomStore, public query: RandomQuery) {
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
        one: random.number(),
        two: random.number(),
        three: random.number(),
      });
    }
  }

  add(r: Random) {
    this.randomStore.add(r);
  }

  update(id, r: Partial<Random>) {
    this.randomStore.update(id, r);
  }

  remove(id: ID) {
    this.randomStore.remove(id);
  }
}
