import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user: User = {
    username: '',
    password: '',
  };
  public loginValid: boolean = true;

  constructor(private loginService: LoginService, private route: Router) {

  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {

  }

  /**
   * when user pressed the login button,
   * sends a request to the server to check if the inputs are valid
   */
  public onSubmit(): void {
    //if the user is undifined
    if (!this.user){
      return;
    }
    //start checking is user is valid
    if(this.user.username && this.user.password) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        if (result) {
          this.route.navigate(['courses-page']);
          this.loginValid = true;
        }
        else {
          this.loginValid = false;
        }

      }, error => {
        this.loginValid = false;
        console.log('error is ', error);
      });
  	}
  }

  /**
   * going to register page
   */
  public toRegister(): void {
    this.route.navigate(['register']);
  }
}
