import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getEventlist() {
    return this.http.get<Event[]>(this.url);
  }
  postEventList(data: { title: string; date: string; venue: string }) {
    return this.http.post(this.url, data);
  }
}
