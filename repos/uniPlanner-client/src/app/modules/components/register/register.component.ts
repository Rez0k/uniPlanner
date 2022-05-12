import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { Consts } from '../../consts/consts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  public loginValid: boolean = true;

  constructor(private loginService: LoginService, private route: Router, private http: HttpClient) {
  }

  public ngOnInit(): void {
  }

  /**
   * @returns if user registerd
   */
  public onRegister(): void {
    //if the user is undifined
    if (!this.user) {
      return;
    }
    //start checking is user is valid
    if (this.user.username && this.user.password) {
      this.loginService.checkValidRegister(this.user).subscribe(result => {
        if(!result){
          this.loginService.register(this.user).subscribe(result => {});
          this.route.navigate(['login']);
        } else {
          console.log(":/")
        }
      }, error => {
        console.log('error is ', error);
      });
    }
  }
  /**
   * direct to login page
   */
  public toLogin(): void {
    this.route.navigate(['login']);
  }
}
