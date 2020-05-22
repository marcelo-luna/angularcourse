import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouterActivatorService } from './events/event-details/event-router-activator.service'
import { EventListResolverService } from './events/event-list-resolver.service'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent  },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivatorService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]