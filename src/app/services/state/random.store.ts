import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Random } from './random.model';

export interface RandomState extends EntityState<Random> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'random' })
export class RandomStore extends EntityStore<RandomState, Random> {

  constructor() {
    super();
  }

}

