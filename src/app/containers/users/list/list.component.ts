import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faSearch,
 } from '@fortawesome/free-solid-svg-icons';
import { UserSportsService } from 'src/app/core/services/user-sports.service';
import { MatTableDataSource } from '@angular/material/table';
import { User, PhotoModel } from 'src/app/core/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public faCoffee = faCoffee;
  public faSearch = faSearch;

  public users: Array<User>;
  public photos: Array<PhotoModel>;
  public displayedColumns: string[] = ['username', 'name', 'email', 'city'];
  public dataSource: MatTableDataSource<User> = new MatTableDataSource();
  public form: FormGroup;

  constructor(
    private userService: UserSportsService,
  ) { }

  public ngOnInit(): void {
    this.getUsers();
    this.getPhotos();

    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  public onSubmit(): void {
    const name: string = this.form.get('name').value;
    this.getByName(name);
  }

  public async getUsers(): Promise<void> {
   try {
    this.users = await this.userService.getUsers();
    this.dataSource.data = this.users;
    console.log(this.users);
   } catch (error) {
    alert('Error fetching users');
   }
  }

  public async getByName(name: string): Promise<void> {
    try {
      this.users = await this.userService.getByName(name);
      this.dataSource.data = this.users;
    } catch (error) {
      alert('Error fetching users');
    }
  }

  public async getPhotos(): Promise<void> {
    try {
      this.photos = await this.userService.getPhotos();
      console.log(this.photos);
    } catch (error) {
      alert('Error fetching photos');
    }
  }

  public clearFilter(): void {
    this.getUsers();
    this.form.get('name').setValue('');
  }

}
