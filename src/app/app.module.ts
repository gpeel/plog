import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PlogModule} from '@gpeel/plog';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlogModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
