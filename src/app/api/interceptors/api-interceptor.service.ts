import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorAdapterService } from '@api/adapters/error.adapter';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private errorAdapter: ErrorAdapterService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentRequest = this.setRequestHeaders(request);
    currentRequest = this.setRequestParams(request);

    return next.handle(currentRequest)
      .pipe(
        catchError(error => throwError(this.errorAdapter.adapt(error)))
      );
  }

  private setRequestHeaders(request: HttpRequest<any>): HttpRequest<any> {
    // Note! Token can't be stored in environment file. Added for testing purposes.
    const token = environment.securityToken;

    if (token) {
      const headers = request.headers.set('Authorization', `Bearer ${token}`);

      return request.clone({ headers });
    }

    return request;
  }

  private setRequestParams(request: HttpRequest<any>): HttpRequest<any> {
    const apiKey = environment.apiKey;

    if (apiKey) {
      const params = request.params.set('api_key', apiKey);

      return request.clone({ params });
    }

    return request;
  }
}
