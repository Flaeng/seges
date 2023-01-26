import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  // ng g interceptor interceptors/auth
  // ng g cl models/current-user
  // ng g s services/jwt
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('jwttoken');
    if (token) {
      const user = JwtService.parse(token);
      request = request.clone({
        setHeaders: {
          Authentication: `Bearer ${user.access_token}`,
        },
      });
    }
    // til demonstration
    request = request.clone({
      setHeaders: {
        Authentication: 'Bearer test',
      },
    });

    return next.handle(request);
  }
}
