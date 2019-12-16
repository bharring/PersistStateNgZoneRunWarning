import { Injectable } from '@angular/core';
import { ID, selectPersistStateInit } from '@datorama/akita';
import { NameStore } from './name.store';
import { Name } from './name.model';
import { NameQuery } from './name.query';
import { name, random } from 'faker';
import { storeSize } from './store-size';

@Injectable({ providedIn: 'root' })
export class NameService {

  constructor(private nameStore: NameStore, public query: NameQuery) {
    selectPersistStateInit().subscribe(() => this.get());
  }

  get() {
    for (let i = this.query.getAll().length; i < storeSize; i++) {
      this.add({
        id: random.number(),
        firstName: name.firstName(),
        lastName: name.lastName(),
        jobDescriptor: name.jobDescriptor(),
      });
    }
  }

  add(n: Name) {
    this.nameStore.add(n);
  }

  update(id, n: Partial<Name>) {
    this.nameStore.update(id, n);
  }

  remove(id: ID) {
    this.nameStore.remove(id);
  }
}
