import { Component, OnInit } from '@angular/core';

interface University {//for the dropdown univeristy selection
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-university-dropdown',
  templateUrl: './university-dropdown.component.html',
  styleUrls: ['./university-dropdown.component.scss']
})
export class UniversityDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  universities: University[] = [
    {value: 'steak-0', viewValue: 'Ben-Gurion'},
    {value: 'pizza-1', viewValue: 'Tel-Aviv'},
    {value: 'tacos-2', viewValue: 'Technion'},
  ];

}
