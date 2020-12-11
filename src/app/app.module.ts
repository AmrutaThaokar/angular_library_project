import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterLinksComponent } from './router-links/router-links.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FilterPipe } from './filter.pipe';
import { DataComponent } from './data/data.component';
import { DatacomponantService } from './datacomponant.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { LoginserService } from './loginser.service';
import { ProfileComponent } from './profile/profile.component';
//import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WelcomePageComponent,
    RouterLinksComponent,
    SignUpComponent,
    SearchPageComponent,
    FilterPipe,
    DataComponent,
    UpdateComponent,
    AddComponent,
    NewloginComponent,
    ProfileComponent,
    //HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatacomponantService, LoginserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
