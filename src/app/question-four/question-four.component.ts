import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.css']
})
export class QuestionFourComponent {

  ages: Age[] = [
    {value: 'option01', viewValue: '18-24'},
    {value: 'option02', viewValue: '25-34'},
    {value: 'option03', viewValue: '35-44'}
    {value: 'option04', viewValue: '45-54'}
    {value: 'option05', viewValue: '55+'}

  ];

}
