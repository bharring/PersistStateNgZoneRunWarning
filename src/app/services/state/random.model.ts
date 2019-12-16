import { ID } from '@datorama/akita';

export interface Random {
  id: ID;
  one: number;
  two: number;
  three: number;
}

/**
 * A factory function that creates Random
 */
export function createRandom(params: Partial<Random>) {
  return {

  } as Random;
}
