import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component } from './errors/404.component'
import { CreateSessionComponent } from './events/create-session/create-session.component'
import { EventResolverService, EventListResolverService } from './events'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component:  EventsListComponent, resolve: {events: EventListResolverService}  },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService} },
    { path: '404', component: Error404Component },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]