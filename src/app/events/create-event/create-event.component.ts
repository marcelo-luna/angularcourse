import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EventService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  private newEvent: FormData;
  isDirty:boolean = true;
  event: any;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  private cancelClick(){
    this.router.navigate(['events']);
  }

  saveEvent(newEvent){
    this.eventService.saveEvent(newEvent);
    this.isDirty = false;
    this.router.navigate(['events']);
  }

}
