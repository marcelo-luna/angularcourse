import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastService } from './common/toast.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail [event]="event" (click)="eventClick(event.name)"></event-thumbnail>
        </div>
      </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService, private toastService: ToastService, private route: ActivatedRoute) {
    console.log('events-module');
  }

  ngOnInit() {
    console.log('here')
    this.events = this.route.snapshot.data['events']
    //this.eventService.getEvents().subscribe(e => this.events = e );
  }

  eventClick(eventName: string) {
    this.toastService.success(eventName, 'Event');
  };
}
