import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { User } from '../models/user.model';
import { PhotoModel, PostsModel, Album, EnumSelector } from '../models';
import { forkJoin, concat } from 'rxjs';
import { map } from 'rxjs/operators';
import { daysWeekEnumeratorList, DaysWeekEnumerator } from '../enumerators';

@Injectable()
export class UserSportsService {

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

  public getAlbums(): Promise<Array<Album>> {
    return this.apiService.get(`albums`).toPromise();
  }

  public getPosts(): Promise<Array<PostsModel>> {
    return this.apiService.get(`posts`).toPromise();
  }

  public getTableData() {
    const users = this.getUsers();
    const posts = this.getPosts();
    const albums = this.getAlbums();
    const photos = this.getPhotos();


    return forkJoin([users, posts, albums, photos]).pipe(map(res => {
      const data: Array<User> = new Array<User>();

      res[0].forEach(user => {

        const tempTableData: User = {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: user.address,
          daysOfWeek: this.verifyDays(),
          albums: this.countUserAlbums(user.id, res[2]),
          posts: this.countUserPosts(user.id, res[1]),
          photos: this.countUserPhotos(user.id, res[2], res[3])
        };

        data.push(tempTableData);
      });
      return data;
    }));
  }

  private getDays(): Array<EnumSelector> {
    const days: typeof daysWeekEnumeratorList = daysWeekEnumeratorList;
    const newDays: Array<EnumSelector> = new Array<EnumSelector>();
    const num1: number = this.randomNumber();

    for (let i = 0; i <= num1; i++) {
      const num2: number = this.randomNumber();

      days.filter(d => {
        if (d.id === num2) {
          const find = newDays.find(newDay => newDay === d);
          if (!find) {
            newDays.push(d);
          }
        }
      });
    }
    console.log(newDays.sort((a, b) => a.id - b.id));

    return newDays.sort((a, b) => a.id - b.id);
  }

  private verifyDays(): string {
    const days: Array<EnumSelector> = this.getDays();
    const daysEnum: typeof DaysWeekEnumerator = DaysWeekEnumerator;
    let res: string;

    if (days.length === 2) {
      days.find(d => {
        if ((d.id === daysEnum.SUN) || (d.id === daysEnum.SAT)) {
          res = 'Weekends';
          return res;
        }
      });
    }

    if (days.length <= 3) {
      let concatDays = '';

      days.forEach(day => {
        concatDays = concatDays.concat(day.description + ', ');
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
    }

  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 7) + 1;
  }

  private countUserAlbums(userId: number, albums: Album[]): number {
    return albums.filter(item => item.userId === userId).length;
  }

  private countUserPosts(userId: number, posts: PostsModel[]): number {
    return posts.filter(item => item.userId === userId).length;
  }

  private countUserPhotos(userId: number, albums: Album[], photos: PhotoModel[]): number {
    let photoCounter = 0;
    const userAlbuns = albums.filter(item => item.userId === userId);

    userAlbuns.forEach(album => {
      photoCounter += photos.filter(photo => photo.albumId === album.id).length;
    });

    return photoCounter;
  }
}
