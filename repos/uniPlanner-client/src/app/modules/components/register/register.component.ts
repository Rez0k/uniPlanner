import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private route: Router) {
  }

  public ngOnInit(): void {
  }

  /**
   * @returns if user registerd
   */
  public onRegister(): void {
    //if the user is undifined
    if (!this.user){
      return;
    }
    //start checking is user is valid
    if(this.user.username && this.user.password) {
  		this.loginService.register(this.user).subscribe(result => {
        if (result) {
          this.route.navigate(['login']);
        }else{ console.log(":/")}
      }, error => {
        this.loginValid = false;
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
