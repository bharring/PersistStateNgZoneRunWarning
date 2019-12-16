import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NameStore, NameState } from './name.store';
import { Name } from './name.model';

@Injectable({
  providedIn: 'root'
})
export class NameQuery extends QueryEntity<NameState, Name> {

  constructor(protected store: NameStore) {
    super(store);
  }

}
