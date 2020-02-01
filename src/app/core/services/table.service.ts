import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models';
import { UserSportsService } from './user-sports.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public users: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);

  constructor(
    private userSportService: UserSportsService,
  ) {
    this.getUsers();
   }

   public getData(): Observable<Array<User>> {
     return this.users.asObservable();
   }

  public getUsers() {
    this.userSportService.getTableData().subscribe(res => {
      this.users.next(res);
    });
  }

  public createUser(user: User) {
    let users: Array<User>;
    users = this.users.getValue();
    users.push(user);
    this.users.next(users);
  }

  public deleteUser(user: number) {
    let users: Array<User>;
    users = this.users.getValue();
    const find = users.findIndex(u => u.id === user);
    users.splice(find, 1);
    this.users.next(users);
  }
}
