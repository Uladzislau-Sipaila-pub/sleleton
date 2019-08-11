import { Injectable } from '@angular/core';
import { Adapter } from '@shared/types/adapter';
import { ApiError } from '@shared/types/api-error';

@Injectable({
  providedIn: 'root'
})
export class ErrorAdapterService implements Adapter<ApiError> {
  constructor() { }

  adapt(item: any): ApiError {
    const code = item.status || item.code || 400;
    const message = item.message || 'Unexpected error';

    return {
      code,
      message
    };
  }
}
