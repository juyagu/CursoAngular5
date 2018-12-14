import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { LoopBackV2Component } from './loop-back-v2/loop-back-v2.component';
import { LoopBackV3Component } from './loop-back-v3/loop-back-v3.component';
import { LoopBackV4Component } from './loop-back-v4/loop-back-v4.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    LoopBackV2Component,
    LoopBackV3Component,
    LoopBackV4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
