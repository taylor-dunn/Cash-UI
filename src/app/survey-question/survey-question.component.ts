import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent {

options: Option[] = [
  { value: 'option-0', viewValue: 'Tax Site A' },
  { value: 'option-1', viewValue: 'Tax Site B' },
  { value: 'option-2', viewValue: 'Tax Site C'},
  { value: 'option-3', viewValue: 'Tax Site D'},

];
}
