import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, } from "angular5-social-login";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetSideComponent } from './widget-side/widget-side.component';
import { WidgetCategoriesComponent } from './widget-categories/widget-categories.component';
import { WidgetSearchComponent } from './widget-search/widget-search.component';
import { BlogSummaryComponent } from './blog-summary/blog-summary.component';
import { ControlPaginationComponent } from './control-pagination/control-pagination.component';
import { BlogService } from './blog.service';
import { AuthGuardGuardGuard } from './auth-guard-guard.guard'

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("732796863746-15jhvtn8ft7n4nj7pm15u15kqfhlv16t.apps.googleusercontent.com")
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("149404765721242")

      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    GroupComponent,
    MotorcycleComponent,
    BlogComponent,
    FooterComponent,
    WidgetSideComponent,
    WidgetCategoriesComponent,
    WidgetSearchComponent,
    BlogSummaryComponent,
    ControlPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    BlogService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AuthGuardGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
