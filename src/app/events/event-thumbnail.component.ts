import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="setClass()" [ngStyle]="{'color': event?.time === '8:00 am' ? 'lightgreen' : ''}" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div [hidden]="!event.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .bold {font-weight: bold;}
    .italic {font-style: italic}
  `]
})
export class EventThumbnailComponent {
  @Input() event:any

  setClass(){
    if (this.event && this.event.time === '8:00 am')
      return ['bold', 'italic'];
    else
      return '';
  }
} 