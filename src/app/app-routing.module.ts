import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: TopicsComponent },
  { path: 'addTopic', component: AddTopicComponent },
  { path: 'getCourse', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
