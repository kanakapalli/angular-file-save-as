import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileSaveAsComponent } from './file-save-as/file-save-as.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FileSaveAsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
