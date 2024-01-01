import { NgModule } from
 
'@angular/core';
import { BrowserModule } from
 
'@angular/platform-browser';
import { AppComponent } from
 
'./app.component';
import { ServerModule } from '@angular/platform-server';

@NgModule({
  declarations: [
  //AppComponent
  ],
  imports: [BrowserModule, ServerModule],
  providers: [],
  bootstrap: [
  //AppComponent
  ],
})
export class AppModule {}