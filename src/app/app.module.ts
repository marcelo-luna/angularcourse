import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from 'src/app/events/shared/event.service'
import { ToastService } from 'src/app/events/common/toast.service'
import { CreateEventComponent } from './shared/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouterActivatorService } from './events/event-details/event-router-activator.service'
import { EventListResolverService } from './events/event-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)


  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastService,
    EventRouterActivatorService,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  else
    return true;
}