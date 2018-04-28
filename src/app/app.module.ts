import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
