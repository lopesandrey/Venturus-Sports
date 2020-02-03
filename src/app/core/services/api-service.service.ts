import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(path: string, params: any = null): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  public getMock(path: string): Observable<any> {
    return this.http.get<any>(`${environment.mockUrl}${path}`)
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  public postFormData(path: string, formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, formData)
      .pipe(catchError(this.formatErrors));
  }

  public putFormData(path: string, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, formData)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string, custom: object = null): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any): any {
    return throwError(error.error);
  }
}
