import { Pipe, PipeTransform } from '@angular/core';
import { DaysOfWeek } from 'src/app/core/models';
import { WeekDay } from '@angular/common';

@Pipe({
  name: 'daysWeek'
})
export class DaysWeekPipe implements PipeTransform {

  transform(value: DaysOfWeek, args?: any): any {

    const sun = 'sun';
    const mon = 'mon';
    const tue = 'tue';
    const wed = 'wed';
    const thu = 'thu';
    const fri = 'fri';
    const sat = 'sat';
    let result = '';

    if (value.sun) {
      result = result.concat(sun + ', ');
    }
    if (value.mon) {
      result = result.concat(mon + ', ');
    }
    if (value.tue) {
      result = result.concat(tue + ', ');
    }
    if (value.wed) {
      result = result.concat(wed + ', ');
    }
    if (value.thu) {
      result = result.concat(thu + ', ');
    }
    if (value.fri) {
      result = result.concat(fri + ', ');
    }
    if (value.sat) {
      result = result.concat(sat);
    }

    if (result === 'sun, mon, tue, wed, thu, fri, sat') {
      result = 'Every days';
    }

    if (result === ('mon, tue, wed, thu, fri')) {
      result = 'Week days';
    }

    if (result === 'sun, sat') {
      result = 'Weekends';
    }

    return result;
  }

}
