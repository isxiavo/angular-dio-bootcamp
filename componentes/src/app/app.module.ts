import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MenuComponent} from '../components/menu.component';
import { Button } from 'src/components/button/button.component';
import { EntryData } from 'src/components/entry-data/entry-data';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Button,
    EntryData
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
