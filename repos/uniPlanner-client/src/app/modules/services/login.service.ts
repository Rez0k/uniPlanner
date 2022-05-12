import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Consts } from '../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) { }

	validateLogin(user: User){
		return this.http.get(`${Consts.apiUrl}users/validateLogin?username=${user.username}&password=${user.password}`);
	}

  //get all users from db
  getAll() {
    return this.http.get<User[]>(Consts.apiUrl);
  }

  //register a new user to the db
  register(user: User) {
      //return this.http.post(`${config.apiUrl}/users/register`, user);
  }

  //delete user from db
  delete(id: number) {
      //return this.http.delete(`${config.apiUrl}/users/${id}`);
  }

}
