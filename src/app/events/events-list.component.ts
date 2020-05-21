import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastService } from '../events/common/toast.service'
import { ActivatedRoute } from '@angular/router'

declare let toastr

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
  events:any

  constructor(private eventService: EventService, private toastr: ToastService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    //this.events = this.route.snapshot.data['events']
    this.eventService.getEvents().subscribe(events => this.events = events)
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName, 'Event')
  }
}