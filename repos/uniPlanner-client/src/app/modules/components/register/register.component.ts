import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';

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

  constructor(private loginService: LoginService) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
  }
}
