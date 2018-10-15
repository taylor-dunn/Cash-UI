import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {
isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
thirdFormGroup: FormGroup;
fourthFormGroup: FormGroup;
fifthFormGroup: FormGroup;
sixthFormGroup: FormGroup;
seventhFormGroup: FormGroup;
eigthFormGroup: FormGroup;
ninthFormGroup: FormGroup;
tenthFormGroup: FormGroup;
eleventhFormGroup: FormGroup;
twelthFormGroup: FormGroup;
thirteenthFormGroup: FormGroup;
fourteenthFormGroup: FormGroup;
fifteenthFormGroup: FormGroup;

constructor(private _formBuilder: FormBuilder) {}

ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  this.thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  this.fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required]
  });
  this.fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required]
  });
  this.sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required]
  });
  this.seventhFormGroup = this._formBuilder.group({
    seventhCtrl: ['', Validators.required]
  });
  this.eigthFormGroup = this._formBuilder.group({
    eigthCtrl: ['', Validators.required]
  });
  this.ninthFormGroup = this._formBuilder.group({
    ninthCtrl: ['', Validators.required]
  });
  this.tenthFormGroup = this._formBuilder.group({
    tenthCtrl: ['', Validators.required]
  });
  this.eleventhFormGroup = this._formBuilder.group({
    eleventhCtrl: ['', Validators.required]
  });
  this.twelthFormGroup = this._formBuilder.group({
    twelthCtrl: ['', Validators.required]
  });
  this.thirteenthFormGroup = this._formBuilder.group({
    thirteenthCtrl: ['', Validators.required]
  });
  this.fourteenthFormGroup = this._formBuilder.group({
    fourteenthCtrl: ['', Validators.required]
  });
  this.fifteenthFormGroup = this._formBuilder.group({
    fifteenthCtrl: ['', Validators.required]
  });

}
}
