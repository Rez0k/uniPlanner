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
		return this.http.get(`${Consts.baseUrl}api/users/validate?username=${user.username}&password=${user.password}`);
	}

  //get all users from db
  getAll() {
    return this.http.get<User[]>(Consts.baseUrl);
  }

  //register a new user to the db
  checkValidRegister(user: User) {
    return this.http.get(`${Consts.baseUrl}api/users/userValidate?username=${user.username}`)
  }

  //register a new user to the db
  register(user: User) {
    return this.http.post(`${Consts.baseUrl}api/users/saveUser`, user);
  }
}
