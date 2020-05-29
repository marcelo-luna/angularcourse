import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared';

@Component({
  selector: 'event-nav-list',
  templateUrl: "./event-nav-list.component.html",
  styles: [`
  li > a { color: #ffff; padding-left: 5px; }
`]
})
export class EventNavListComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    console.log(this.eventService.getEvents().subscribe((data) => data.map(event =>this.events.push(event))));
    console.log(this.events);
  }

}