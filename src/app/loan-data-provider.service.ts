import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {normalizeDate} from './string-util';

@Injectable({
  providedIn: 'root'
})
export class LoanDataProviderService {

  private url = environment.DB_API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  get(loanId: number): Observable<any> {
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + environment.DB_AUTH_KEY
      }),
      params: {flag: '3', loan_id: loanId + ''}
    })
      .pipe(
        map((x) => {
          const d = x[0];
          if (d.disbursement_date === null) {
            throwError('Not found');
          }
          d.date_of_birth = normalizeDate(d.date_of_birth);
          d.disbursement_date = normalizeDate(d.disbursement_date);
          d.loan_half_cycle_date = normalizeDate(d.loan_half_cycle_date);
          d.membership_date = normalizeDate(d.membership_date);
          return d;
        }),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
