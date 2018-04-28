import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogSummaryComponent } from './blog-summary/blog-summary.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { AuthGuardGuardGuard } from './auth-guard-guard.guard'
import { BlogFormComponent } from './blog-form/blog-form.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "index", component: AppComponent },
  { path: "blog/edit", component: BlogFormComponent },
  { path: "blog", component: BlogSummaryComponent },
  { path: "blog/:name", component: BlogComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent, canActivate: [AuthGuardGuardGuard] },
  { path: "moto", component: MotorcycleComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
