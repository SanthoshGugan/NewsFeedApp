import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Router Module
import { NewsRouterModule } from '../routes/routes.module';

// import { HttpModule } from '@angular/http';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

// Services
import { newsFetch } from '../services/newsFetch';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsSpecificComponent } from './news-specific/news-specific.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsSpecificComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NewsRouterModule
  ],
  providers: [newsFetch],
  bootstrap: [AppComponent]
})
export class AppModule { }
