import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user : User;
  public loginValid: boolean = true;

  constructor(private loginService: LoginService) {
  	this.user = new User();
  }

  public ngOnInit(): void {
  }

  /**
   * when user pressed the login button,
   * sends a request to the server to check if the inputs are valid
   */
  public onSubmit(): void {
    //send http to server to check if user and passwords are correct
    if(this.user.username && this.user.password) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        this.loginValid = true;
        console.log('result is ', result);
      }, error => {
        this.loginValid = false;
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }
}
