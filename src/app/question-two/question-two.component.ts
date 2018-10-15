import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.css']
})
export class QuestionTwoComponent {

  towns: Town[] = [
    {value: 'option01', viewValue: 'Rhinebeck'},
    {value: 'option02', viewValue: 'Red Hook'},
    {value: 'option03', viewValue: 'Pine Plains'}
    {value: 'option04', viewValue: 'Millerton'}
    {value: 'option05', viewValue: 'Poughkeepsie'}
    {value: 'option06', viewValue: 'Pleasant Valley'}
    {value: 'option07', viewValue: 'Millbrook'}
    {value: 'option08', viewValue: 'Dover Plains'}
    {value: 'option09', viewValue: 'Wappingers Falls'}
    {value: 'option10', viewValue: 'Fishkill'}
    {value: 'option11', viewValue: 'Beacon'}
    {value: 'option12', viewValue: 'Pawling'}
    {value: 'option13', viewValue: 'Other'}
  ];
  }
