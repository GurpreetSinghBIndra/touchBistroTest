import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorComponentService implements HttpInterceptor {
  constructor(private snackbar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let message = '';
          if (error.error instanceof ErrorEvent) {
            message = `${error.error.message}`;
          } else {
            try {
              if (error.error.code) {
                message = `Error Code: ${error.error.code}\nCode Description: ${error.error.codedesc}\nMessage: ${error.error.message}`;
              } else {
                  message = `Message: ${error.message}`;
              }
            } catch {
              message = `Error Code: ${error.error}\nMessage: ${error.message}`;
            }
          }
          this.snackbar.open(message.length > 500 ?
              message.slice(0, 500) : message, 'Close', {
            horizontalPosition : 'center',
            verticalPosition: 'bottom',
            panelClass: 'snackbar-error'
          });
          return throwError(message);
        })
      );
  }
}
