import {EventEmitter, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {UserToken} from "../model/user-token";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>
  update = new EventEmitter<string>();
  constructor(private httpClient : HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() : UserToken {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.httpClient.post<any>(API_URL + '/login', {username, password})
      .pipe(map(user => {localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(API_URL + '/register', user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ID');
    localStorage.removeItem('NAME');
    localStorage.removeItem('PHONE');
    localStorage.removeItem('EMAIL');
  }

  findAllCustomersExpectUser(id: any): Observable<User> {
    return this.httpClient.get<User>(API_URL + '/users/find-all-customers-expect-user/' + id);
  }

  findUserById(id: any): Observable<User> {
    return this.httpClient.get<User>(API_URL + '/users/' + id);
  }

  findCustomerByPhone(phone: any, id: any): Observable<User> {
    return this.httpClient.get<User>(API_URL + '/users/find-customer-by-phone?phone=' + phone + '&id=' + id);
  }
}
