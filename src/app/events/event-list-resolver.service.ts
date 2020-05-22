import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEvent } from './shared';


@Injectable()
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IEvent>|Promise<any>|any {
    return this.eventService.getEvents().pipe(map(events => events))
  }}
