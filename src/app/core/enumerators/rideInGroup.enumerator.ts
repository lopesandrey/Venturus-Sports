import { EnumSelector } from '../models';

export enum RideInGroupEnumerator {
  ALWAYS = 1,
  SOMETIMES = 2,
  NEVER = 3,
}

export const rideInGroupEnumeratorMap: Map<RideInGroupEnumerator, string> = new Map<RideInGroupEnumerator, string>([
  [RideInGroupEnumerator.ALWAYS, 'Always'],
  [RideInGroupEnumerator.SOMETIMES, 'Sometimes'],
  [RideInGroupEnumerator.NEVER, 'Never'],
]);

export const rideInGroupEnumeratorList:
  Array<EnumSelector> = Array.from(rideInGroupEnumeratorMap).map((o: Array<any>) => ({
    id: o[0],
    description: o[1],
  }));
