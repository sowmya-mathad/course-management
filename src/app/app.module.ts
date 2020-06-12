import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { AddTopicComponent } from './add-topic/add-topic.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    CoursesComponent,
    AddTopicComponent,    
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
