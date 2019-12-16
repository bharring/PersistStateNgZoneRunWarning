import { ID } from '@datorama/akita';

export interface Hacker {
  id: ID;
  abbreviation: string;
  adjective: string;
  noun: string;
}

/**
 * A factory function that creates Hacker
 */
export function createHacker(params: Partial<Hacker>) {
  return {} as Hacker;
}
