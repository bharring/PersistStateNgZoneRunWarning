import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RandomStore, RandomState } from './random.store';
import { Random } from './random.model';

@Injectable({
  providedIn: 'root'
})
export class RandomQuery extends QueryEntity<RandomState, Random> {

  constructor(protected store: RandomStore) {
    super(store);
  }

}
