import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Subscription } from 'rxjs';
import { Character } from '../data/data-types';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AppCacheService } from '../app-cache.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private subs = new Subscription();

  public displayedColumns: string[] = ['name', 'race', 'class'];
  public displayedActionColumns = [...this.displayedColumns, 'actions'];

  public characterData = new MatTableDataSource<Character[]>();
  private dataArray: any = [];

  constructor(
    private readonly authService: SocialAuthService,
    private apiService: ApiService,
    public appCache: AppCacheService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.appCache.authorizedUser = user;
      this.getUserCharacters();
    });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
    this.dataArray = [];
    this.appCache.authorizedUser = undefined;
  }

  public refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  private getUserCharacters(): void {
    if (this.user) {
      this.subs.add(
        this.apiService
          .getCharacters(this.user.email, '')
          .subscribe((result: Character[]) => {
            result.forEach((element) => {
              this.dataArray.push(element);
            });
            this.characterData = new MatTableDataSource<Character[]>(
              this.dataArray
            );
          })
      );
    }
  }

  public removeCharacter(index: number) {
    if (this.user) {
      this.apiService
        .deleteCharacter(this.user.email, this.dataArray[index].name)
        .subscribe((result) => {
          this.dataArray.splice(index, 1);
          this.characterData.data = [...this.dataArray];
        });
    }
  }

  public editCharacter(index: number) {
    if (this.user) {
      this.router.navigate([`/creation/${this.dataArray[index].name}`]);
    }
  }

}
