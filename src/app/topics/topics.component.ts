import { Component, OnInit } from '@angular/core';
import { HttpClientService, Topic } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: '.app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: string[];
  id: string;
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClientService.getTopics().subscribe(response => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.topics = response;
  }

  deleteTopic(topic: Topic): void {
    this.httpClientService.deleteTopic(topic).subscribe(data => {
      this.topics = this.topics.filter(u => u !== topic.id);
    });
  }

  getCourses(id: string): void {
    this.router.navigate(['/getCourse'], {
      queryParams: { id: this.id }
   });
    // this.httpClientService.getCourses(id).subscribe(data => {
    //   "courses"   
    // });
    
  }
  
}


