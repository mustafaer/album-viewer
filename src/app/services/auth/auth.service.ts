import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class AuthService {
  lang = localStorage.getItem('lang');
  headerWithoutToken = new HttpHeaders();

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService) {
  }

  ServerGet(address: string) {
    this.spinner.show();
    const headers = this.headerWithoutToken;
    const options = {headers};
    return this.http.get(address, options)
      .pipe(
        map(res => res),
        catchError((err) => {
          return throwError(err);
        }));
  }
}
