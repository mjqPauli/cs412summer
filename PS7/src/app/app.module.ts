import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QueryDisplayComponent } from './query-display/query-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    QueryDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
