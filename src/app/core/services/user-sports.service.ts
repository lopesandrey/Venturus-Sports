import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { User } from '../models/user.model';
import { PhotoModel } from '../models';

@Injectable()
export class UserSportsService {
  public basePath: 'users';

  constructor(
    private apiService: ApiService,
  ) { }

  public getUsers(): Promise<Array<User>> {
    return this.apiService.get(`users`).toPromise();
  }

  public getByName(name: string): Promise<Array<User>> {
    return this.apiService.get(`users?name_like=${name}`).toPromise();
  }

  public getPhotos(): Promise<Array<PhotoModel>> {
    return this.apiService.get(`photos`).toPromise();
  }
}
/* https://jsonplaceholder.typicode.com/photos,
https://jsonplaceholder.typicode.com/albuns e
https://jsonplaceholder.typicode.com/photos */
