import { Component, OnInit } from '@angular/core';

import { HttpClientService, Topic } from '../service/http-client.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  topic: Topic = new Topic("", "", "");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }
  createTopic(): void {
    this.httpClientService.addTopic(this.topic)
      .subscribe(data => {
        alert("Topic created successfully.");
      });
  };
  
}
