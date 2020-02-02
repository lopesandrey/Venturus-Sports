import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { User } from '../models/user.model';
import { PhotoModel, PostsModel, Album, EnumSelector, DaysAndRideGroup } from '../models';
import { forkJoin, concat, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { daysWeekEnumeratorList, DaysWeekEnumerator } from '../enumerators';

@Injectable()
export class UserSportsService {

  constructor(
    private apiService: ApiService,
  ) {
/*     this.getDays().subscribe(res => {console.log(res)})
 */   }

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

  public getPostsByUser(id: number): Observable<Array<PostsModel>> {
    return this.apiService.get(`posts?userId=${id}`);
  }

  public getAlbumsByUser(id: number): Observable<Array<Album>> {
    return this.apiService.get(`albums?userId=${id}`);
  }

  public getDays() {
    return this.apiService.getMock(`getdays`);
  }

  public getTableData() {
    const users = this.getUsers();
    const posts = this.getPosts();
    const albums = this.getAlbums();
    const photos = this.getPhotos();

    return forkJoin([users, posts, albums, photos]).pipe(map(res => {
      const data: Array<User> = new Array<User>();
      res[0].forEach(user => {
        let daysAndRide: DaysAndRideGroup;
        this.getDays().subscribe(d => { daysAndRide = d; });

        const tempTableData: User = {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: user.address,
          daysOfWeek: daysAndRide.days,
          rideInGroup: daysAndRide.rideInGroup,
          albums: this.albumsAmount(user.id, res[2]),
          posts: this.postsAmount(user.id, res[1]),
          photos: this.userPhotoAmount(user.id, res[2], res[3])
        };

        data.push(tempTableData);
      });
      return data;
    }));
  }

  private albumsAmount(userId: number, albums: Array<Album>): number {
    return albums.filter(item => item.userId === userId).length;
  }

  private postsAmount(userId: number, posts: Array<PostsModel>): number {
    return posts.filter(item => item.userId === userId).length;
  }

  private userPhotoAmount(userId: number, albums: Array<Album>, photos: Array<PhotoModel>): number {
    let count = 0;
    const userAlbuns = albums.filter(item => item.userId === userId);

    userAlbuns.forEach(album => {
      count += photos.filter(photo => photo.albumId === album.id).length;
    });

    return count;
  }
}
