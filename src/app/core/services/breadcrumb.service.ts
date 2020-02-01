import { Injectable } from '@angular/core';
import { Link } from '../models/link.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private subject: Subject<Array<Link>> = new Subject<Array<Link>>();

  public get(): Observable<Array<Link>> {
    return this.subject.asObservable();
  }

  public set(data: Array<Link>): void {
    this.subject.next(data);
  }
}
