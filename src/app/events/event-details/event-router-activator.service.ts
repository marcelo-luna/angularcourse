import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { EventService } from '../shared/event.service'
import { ActivatedRouteSnapshot, Router,  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouterActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
    const eventExists =  !!this.eventService.getEvent(route.params['id']);

    if (!eventExists)
     return this.router.navigate(['/404']);
      
      return eventExists
  }
}
