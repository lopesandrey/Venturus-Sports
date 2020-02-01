import { EnumSelector } from '../models';

export enum DaysWeekEnumerator {
  SUN = 1,
  MON = 2,
  TUE = 3,
  WED = 4,
  THU = 5,
  FRI = 6,
  SAT = 7,
}

export const daysWeekEnumeratorMap: Map<DaysWeekEnumerator, string> = new Map<DaysWeekEnumerator, string>([
  [DaysWeekEnumerator.SUN, 'Sun'],
  [DaysWeekEnumerator.MON, 'Mon'],
  [DaysWeekEnumerator.TUE, 'Tue'],
  [DaysWeekEnumerator.WED, 'Wed'],
  [DaysWeekEnumerator.THU, 'Thu'],
  [DaysWeekEnumerator.FRI, 'Fri'],
  [DaysWeekEnumerator.SAT, 'Sat'],
]);

export const daysWeekEnumeratorList:
  Array<EnumSelector> = Array.from(daysWeekEnumeratorMap).map((o: Array<any>) => ({
    id: o[0],
    description: o[1],
  }));
