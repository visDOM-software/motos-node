import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogSummaryComponent } from './blog-summary/blog-summary.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MotorcycleCompareComponent } from './motorcycle-compare/motorcycle-compare.component';
import { AuthGuardGuardGuard } from './auth-guard-guard.guard'
import { BlogFormComponent } from './blog-form/blog-form.component'
import { BlogListComponent } from './blog-list/blog-list.component'
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "index", component: AppComponent },
  { path: "blog/edit", component: BlogFormComponent },
  { path: "blog/edit/:id", component: BlogFormComponent },
  { path: "blog/:id", component: BlogComponent },
  { path: "blog/mine", component:BlogListComponent },
  { path: "blog", component: BlogSummaryComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent, canActivate: [AuthGuardGuardGuard] },
  { path: "compare-moto", component: MotorcycleCompareComponent },
  { path: "**", component: Page404Component }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
