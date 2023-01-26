import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/current-user';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  static parse(token: string): CurrentUser {
    return {
      username: 'John Doe',
      access_token: '',
      roles: ['user']
    }
  }

}
