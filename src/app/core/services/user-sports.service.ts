import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { User } from '../models/user.model';
import { PhotoModel, PostsModel, Album } from '../models';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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

  public getAlbums(): Promise<Array<PhotoModel>> {
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


    return forkJoin([users, posts, albums, photos]).pipe(map(result => {
      const tableDataArray: User[] = [];
      let tempTableData: User;
      console.log(result)
      result[0].forEach(user => {
        tempTableData = {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: user.address,
          albums: this.countUserAlbums(user.id, result[2]),
          posts: this.countUserPosts(user.id, result[1]),
          photos: this.countUserPhotos(user.id, result[2], result[3])
        };

        tableDataArray.push(tempTableData);
      });
      return tableDataArray;
    }));
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
/* https://jsonplaceholder.typicode.com/photos,
https://jsonplaceholder.typicode.com/albuns e
https://jsonplaceholder.typicode.com/photos */
