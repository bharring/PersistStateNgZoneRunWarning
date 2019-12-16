import { ID } from '@datorama/akita';

export interface Name {
  id: ID;
  firstName: string;
  lastName: string;
  jobDescriptor: string;
}

/**
 * A factory function that creates Name
 */
export function createName(params: Partial<Name>) {
  return {

  } as Name;
}
