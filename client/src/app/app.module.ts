import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MdButtonModule,MdToolbarModule,MdIconModule,MdSidenavModule,MdListModule} from "@angular/material";

import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MdButtonModule,MdToolbarModule,MdIconModule,MdSidenavModule,MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
