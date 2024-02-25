import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  events: Event[] = [];

  constructor(private api: ApiClientService) {}

  ngOnInit() {
    this.getDetails();
  }
  addEvent(event: Event) {
    this.events.push(event);
  }

  getDetails() {
    this.api.getEventlist().subscribe(
      (res: Event[]) => {
        const currentTime = new Date().getTime();

        // Filter out past events
        const futureEvents = res.filter((event: any) => {
          return new Date(event.date).getTime() > currentTime;
        });

        // Sort future events by date
        this.events = futureEvents.sort((a: any, b: any) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
