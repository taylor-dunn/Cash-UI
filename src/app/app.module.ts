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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomePageComponent,
    SurveyQuestionComponent

  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
