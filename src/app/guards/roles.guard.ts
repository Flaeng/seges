import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot
} from '@angular/router';

import { JwtService } from '../services/jwt.service';

// @Injectable({
//   providedIn: 'root'
// })
export class RolesGuard {

  static hasRoles(roles: string | string[]): CanActivateFn {
    localStorage.setItem('jwttoken', '123');
    return (route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) => {

      const token = localStorage.getItem('jwttoken');
      if (!token) return false;

      const user = JwtService.parse(token);

      if (Array.isArray(roles)) {
        return roles.some(x => user.roles.includes(x));
      } else {
        return user.roles.includes(roles);
      }
    };

  }

}
