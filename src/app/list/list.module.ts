import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TolistService } from '../tolist.service';
import { ListComponent } from './list.component';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      
    ],
    declarations: [
      ListComponent
    ],
    providers: [
      TolistService
    ],
    exports: [
      ListComponent
    ],
  })
  export class ListModule {
   }
  