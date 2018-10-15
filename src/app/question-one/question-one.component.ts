import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent {

    reasons: Reason[] = [
      {value: 'option01', viewValue: 'Community outreach'},
      {value: 'option02', viewValue: 'Support clients/assist in identifying and accessing services'},
      {value: 'option03', viewValue: 'Benefits assistance'}
      {value: 'option04', viewValue: 'Housing/rental assistance'}
      {value: 'option05', viewValue: 'Food pantry'}
      {value: 'option06', viewValue: 'Client advocacy'}
      {value: 'option07', viewValue: 'Provide referrals to other agencies'}
      {value: 'option08', viewValue: 'Weatherization'}
      {value: 'option09', viewValue: 'Dress for success'}
      {value: 'option10', viewValue: 'RSVP (Senior Volunteer program)'}
      {value: 'option11', viewValue: 'Other'}
    ];
  }
