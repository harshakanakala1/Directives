import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuraldirectiveComponent,
    AttributedirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
