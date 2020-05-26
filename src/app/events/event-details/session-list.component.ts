import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions){
      this.filterSession();
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSession(){
    if (this.filterBy === 'all'){
      this.visibleSessions = this.sessions;
    }else{
      this.visibleSessions = this.sessions.filter(f => f.level.toLocaleLowerCase() === this.filterBy);
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession){
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession){
  return s2.voters.length - s1.voters.length;
}