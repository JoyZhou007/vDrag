import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxVisualDragModule } from './vdrag/ngx-visual-drag.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxVisualDragModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
