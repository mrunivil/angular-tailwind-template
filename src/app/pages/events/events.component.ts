import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEntity } from '../../core/event.entity';
import { AuthService } from '../../services/auth.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  userName?: string;
  events$?: Observable<Array<EventEntity>>;
  constructor(
    private readonly auth: AuthService,
    private readonly eventsService: EventsService
  ) {
    this.userName = this.auth.getUser();
    this.events$ = this.eventsService.getEvents();
  }
}
