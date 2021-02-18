import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTPClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HTTPClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
