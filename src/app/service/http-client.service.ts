import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Topic {
  constructor(
    public id: string,
    public name: string,
    public description: string

  ) { }
}
export class Course {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public topicId: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

   constructor(
    private httpClient: HttpClient
  ) { }

  getTopics() {
    console.log("fetching all topics");
    return this.httpClient.get<Topic[]>('http://localhost:8080/topics')
  }
  addTopic(topic) {
    console.log("Adding topic");
    return this.httpClient.post<Topic>('http://localhost:8080/topics', topic);
  }
  updateTopic(topic) {
    console.log("Update topic");
    return this.httpClient.put<Topic>("http://localhost:8080/topics", topic);
  }
  deleteTopic(topic) {
    console.log("Deleteing topic");
    return this.httpClient.delete<Topic>("http://localhost:8080/topics" + "/" + topic.id);
  }
  getCourses(id) {
    console.log("fetching all courses");
    console.log("http://localhost:8080/topics" + "/" + id + "/courses");
    return this.httpClient.get<Course[]>("http://localhost:8080/topics" + "/" + id + "/courses");
  }
}
