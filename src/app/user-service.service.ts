import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/userList');
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl + '/addUser', user);
  }

  public delete(user: User) {
    return this.http.delete(this.userUrl + '/' + user.id + '/deleteUser');
  }

  public edit(user: User) {
    return this.http.put<User>(this.userUrl + '/editUser', user);
  }

  public getUser(user: User) {
    return this.http.get<User>(this.userUrl + '/' + user.id + '/getUser');
  }
}
