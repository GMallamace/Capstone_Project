import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  take,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAccessData } from '../Interface/iaccess-data';
import { IRegisterData } from '../Interface/iregister-data';
import { ILoginData } from '../Interface/ilogin-data';
import { IUser } from '../Interface/iuser';
import { Lezioni } from '../Interface/lezioni';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwt: JwtHelperService = new JwtHelperService();
  autoLogTimer: any;
  apiUrl: string = 'http://localhost:3000';
  loginUrl: string = this.apiUrl + '/login';
  registerUrl: string = this.apiUrl + '/register';
  LezioniUrl: string = this.apiUrl + '/courses';


  private subj = new BehaviorSubject<IAccessData | null>(null);
  user$ = this.subj.asObservable();
  isLogged$ = this.user$.pipe(map((v) => !!v)); //si, il doppio esclamativo fa più figo :)
  isTeacher$ = this.user$.pipe(map((v) => v?.user.isTeacher));

  constructor(private http: HttpClient, private router: Router) {
    this.getUserData();
  }

  getUsers(): Observable<IRegisterData[]> {
    return this.http.get<IRegisterData[]>(this.apiUrl + '/users');
  }

  isTokenExpired(tok: string): boolean {
    return this.jwt.isTokenExpired(tok);
  }

  getUserData(): void {
    let chk: string | null = localStorage.getItem('user');
    let user: IAccessData | null = null;

    chk ? (user = JSON.parse(localStorage.getItem('user')!)) : null;

    user
      ? this.isTokenExpired(user.accessToken)
        ? this.subj.next(null)
        : this.subj.next(user)
      : this.subj.next(null);
  }

  lezione(data:Lezioni): Observable<Lezioni> {
    return this.http.post<Lezioni>(this.LezioniUrl, data);
  }

  register(data: IRegisterData): Observable<IAccessData> {
    return this.http.post<IAccessData>(this.registerUrl, data);
  }

  login(data: ILoginData): Observable<IAccessData> {
    return this.http.post<IAccessData>(this.loginUrl, data).pipe(
      take(1),
      tap((val) => {
        this.subj.next(val);
        localStorage.setItem('user', JSON.stringify(val));
        const expireDate = this.jwt.getTokenExpirationDate(
          val.accessToken
        ) as Date;
        this.logoutExp(expireDate);
      })
    );
  }

  logout(): void {
    this.subj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['auth/logout']);
  }

  logoutExp(expire: Date): void {
    const msToLogout = expire.getTime() - new Date().getTime();
    this.autoLogTimer = setTimeout(() => {
      this.logout();
    }, msToLogout);
  }

  delete(data: IUser): Observable<{}> {
    return this.http.delete(this.apiUrl + '/users/' + data.id);
  }
}