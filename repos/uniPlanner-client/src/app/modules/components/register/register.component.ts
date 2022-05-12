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

  public onSubmit(): void {
  }

  /**
   * direct to login page
   */
  public toLogin(): void {
    this.route.navigate(['login']);
  }
}
