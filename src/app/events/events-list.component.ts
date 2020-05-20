import { Component } from '@angular/core'
import { EventService } from 'src/app/events/shared/event.service'
import { ToastService } from 'src/app/events/common/toast.service'

@Component({
  selector: 'events-list',
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
export class EventsListComponent {

  constructor(private eventService: EventService, private toastService: ToastService) {

    
  }

  eventClick(eventName: string){
    this.toastService.success(eventName,'Event');
  };


  events = this.eventService.getEvents();

}