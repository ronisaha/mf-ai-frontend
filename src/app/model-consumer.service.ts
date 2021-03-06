import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export interface PredictionResponse {
  type: string;
  score: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModelConsumerService {
  private predictions = ['Good', 'Bad'];

  private url = environment.MODEL_API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  predict(data: any): Observable<PredictionResponse> {
    return this.http.post(this.url, data)
      .pipe(
        map((d: any) => {
          return {
            type: this.predictions[parseInt(d.prediction, 10)],
            score: d['score_' + d.prediction]
          };
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
