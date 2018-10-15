import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomePageComponent,
    SurveyQuestionComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent

  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
