import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Name } from './name.model';

export interface NameState extends EntityState<Name> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'name' })
export class NameStore extends EntityStore<NameState, Name> {

  constructor() {
    super();
  }

}

