import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.css']
})
export class QuestionThreeComponent  {

  gender: string;
  genders: string[] = ['Male', 'Female', 'Other'];


}
