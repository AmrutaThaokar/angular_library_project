import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterLinksComponent } from './router-links/router-links.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FilterPipe } from './filter.pipe';
//import { HighlightDirective } from './highlight.directive';
import { DataComponent } from './data/data.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login-page', component: LoginPageComponent},
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: 'router-links', component: RouterLinksComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'filter', component: FilterPipe},
  //{path: 'highlight', component: HighlightDirective},
  {path: 'data', component: DataComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'add', component: AddComponent},
  {path: 'newlogin', component: NewloginComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
