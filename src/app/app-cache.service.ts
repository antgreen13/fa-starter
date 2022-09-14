import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AppCacheService {
  constructor() {}

  public authorizedUser: SocialUser | undefined;
}
