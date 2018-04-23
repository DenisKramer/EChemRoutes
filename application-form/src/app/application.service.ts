import { Injectable } from '@angular/core';
import { SubmissionResponse, Application } from './application';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApplicationService {

  private applicationsUrl = 'https://xabmfmm6of.execute-api.eu-west-1.amazonaws.com/prod/submit';  // URL to web api
  // private applicationsUrl = 'http://localhost:8888/submit';  // URL to web api

  constructor(private http: HttpClient) { }

  /**
   * Post new application to API.
   * Uses POST HTTP method and sends application data as json
   * @param application - Application that should be submitted
   */
  submit(application: Application) {
    console.log(JSON.stringify(application));
    return this.http.post<SubmissionResponse>(this.applicationsUrl, application, httpOptions).pipe(
      tap((response) => console.log(`Application submission - ${response.status}`)),
      catchError( this.handleError ( 'submit' , application.person.email) )
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue by returning the response structure
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError (operation = 'operation', applicationId: string) {

    return (err: any): Observable<SubmissionResponse> => {
      // TODO: send the error to remote logging infrastructure
      console.error(err); // log to console instead
      if (err.error.applicationId && err.error.status) {
        return of(err.error as SubmissionResponse);
      } else {
        return of({
          applicationId: applicationId,
          status: 'error'
        } as SubmissionResponse);
      }
    };
  }

}
