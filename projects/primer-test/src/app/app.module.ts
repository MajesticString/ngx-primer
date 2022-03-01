import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxPrimerModule } from 'ngx-primer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPrimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
