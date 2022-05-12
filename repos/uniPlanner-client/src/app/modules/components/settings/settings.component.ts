import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public user: User = {
    token: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  addToken(): void {
  }

}
