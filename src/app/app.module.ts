import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import {
  EventThumbnailComponent,
  EventsListComponent,
  EventListResolverService,
  EventDetailsComponent,
  EventRouterActivatorService,
  SessionListComponent
  
} from './events/index'

import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from 'src/app/events/shared/event.service'
import { ToastService } from 'src/app/events/common/toast.service'
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  providers: [
    EventService,
    ToastService,
    EventRouterActivatorService,
    EventListResolverService,
    AuthService,
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