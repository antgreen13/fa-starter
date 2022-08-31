import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { CHARACTERS } from '../data/mock-characters';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;

  characterData = CHARACTERS;
  test: string;
  displayedColumns: string[] = ['name', 'race', 'class'];

  constructor(
    private readonly authService: SocialAuthService,
    private apiService: ApiService
  ) {}


  public ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }

  public refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getUserCharacters(): void {
    if (this.user) {
      this.apiService.getCharacters(this.user.email).subscribe((result) => {
        this.test = result;
      });
    }
  }
}
