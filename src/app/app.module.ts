import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { TwitterProfileComponent } from '../app/twitter-profile/twitter-profile.component';
import {PROVIDERS } from "./app.provider";


@NgModule({
  declarations: [
    AppComponent,
    TwitterProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PROVIDERS],
  bootstrap: [AppComponent, TwitterProfileComponent]
})
export class AppModule { }
