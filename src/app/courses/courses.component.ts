import { Component, OnInit } from '@angular/core';
import { HttpClientService, Course } from '../service/http-client.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: string[];
  id: string = "";
  constructor(
    private httpClientService: HttpClientService,

  ) { }

  ngOnInit() {
    this.httpClientService.getCourses(this.id).subscribe(response => this.handleSuccessfulResponse(response));

  }
  handleSuccessfulResponse(response) {
    this.courses = response;
  }
  
}
