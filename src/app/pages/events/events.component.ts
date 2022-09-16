import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEntity, ProposalEntity } from '../../core/event.entity';
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

  getVotesByEventId(id: string): number {
    return this.eventsService.getTotalUserVotesByEventId(id, this.userName)
      .length;
  }

  getSubmittedProposalVotesByProposalId(
    event: EventEntity,
    proposal: ProposalEntity
  ): number {
    return this.eventsService.getSubmittedProposalsByUserName(
      event.id,
      proposal.id,
      this.userName
    ).length;
  }

  voteForProposal(event: EventEntity, proposal: ProposalEntity): void {
    console.log('voting for ' + proposal.title);
    this.eventsService.voteForProposal(event.id, proposal.id, this.userName);
  }
}
