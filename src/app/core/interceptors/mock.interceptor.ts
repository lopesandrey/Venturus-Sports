import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EnumSelector, DaysAndRideGroup, DaysOfWeek } from '../models';
import { daysWeekEnumeratorList, DaysWeekEnumerator, rideInGroupEnumeratorList } from '../enumerators';


@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (request.url.includes('mock/getdays')) {
      return of(new HttpResponse({ status: 200, body: this.assembleObj() }));
    }

    return next.handle(request);
  }

  public getDays(): Array<EnumSelector> {
    const days: typeof daysWeekEnumeratorList = daysWeekEnumeratorList;
    const newDays: Array<EnumSelector> = new Array<EnumSelector>();
    const num1: number = this.randomNumber(7);

    for (let i = 0; i <= num1; i++) {
      const index: number = this.randomNumber(7);

      days.filter(d => {
        if (d.id === index) {
          const find = newDays.find(newDay => newDay === d);
          if (!find) {
            newDays.push(d);
          }
        }
      });
    }

    return newDays.sort((a, b) => a.id - b.id);
  }

  public getRideInGroup(): string {
    const rideEnum: typeof rideInGroupEnumeratorList = rideInGroupEnumeratorList;
    let ride: EnumSelector;
    const index: number = this.randomNumber(3);

    rideEnum.filter(r => {
      if (r.id === index) {
        ride = r;
      }
    });


    return ride.description;
  }

  public verifyDays() {
    const days: Array<EnumSelector> = this.getDays();
    const daysEnum: typeof DaysWeekEnumerator = DaysWeekEnumerator;

    const sun = days.find(d => d.id === daysEnum.SUN);
    const mon = days.find(d => d.id === daysEnum.MON);
    const tue = days.find(d => d.id === daysEnum.TUE);
    const wed = days.find(d => d.id === daysEnum.WED);
    const thu = days.find(d => d.id === daysEnum.THU);
    const fri = days.find(d => d.id === daysEnum.FRI);
    const sat = days.find(d => d.id === daysEnum.SAT);

    const daysOfWeek: DaysOfWeek = {
      sun: sun ? true : false,
      mon: mon ? true : false,
      tue: tue ? true : false,
      wed: wed ? true : false,
      thu: thu ? true : false,
      fri: fri ? true : false,
      sat: sat ? true : false,
    }

    return daysOfWeek;



    /* if (days.length === 2) {
      const sat = days.find(d => d.id === daysEnum.SAT);
      const sun = days.find(d => d.id === daysEnum.SUN);

      if (sat && sun) {
        res = 'Weekends';
        return res;
      }

    }

    if (days.length <= 3) {
      let concatDays = '';

      days.forEach(day => {
        concatDays = concatDays.concat(day.description + ' ');
      });
      res = concatDays;
      return res;
    }

    if (days.length > 3) {
      res = 'Week days';
      return res;
    }

    if (days.length === 7) {
      res = 'Every day';
      return res;
    } */
  }

  public assembleObj() {
    const obj: DaysAndRideGroup = {
      days: this.verifyDays(),
      rideInGroup: this.getRideInGroup(),
    };
    return obj;
  }

  public randomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
