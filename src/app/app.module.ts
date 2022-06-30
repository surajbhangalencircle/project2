import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailsService } from './services/userdetails.service';
import { EdituserComponent } from './components/edituser/edituser.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RootComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
