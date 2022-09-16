import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { EventEntity, ProposalEntity } from '../core/event.entity';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventList$: Subject<Array<EventEntity>> = new ReplaySubject<
    Array<EventEntity>
  >();

  readonly eventList: Array<EventEntity> = [
    {
      id: '1',
      title: 'Team Event',
      date: new Date('01.11.2022'),
      proposals: [
        {
          id: '1',
          title: 'Mini-Golf',
          votes: [],
          description:
            'Eine gemütliche Runde Minigolf steigert den Ehrgeiz. Denn verlieren ist keine Option!',
        },
        {
          id: '2',
          title: 'Kochkurs',
          votes: [],
          description:
            'Gemeinsam das Abendessen vorbereiten. Viele Köche .... ach was! Das wird bestimmt lustig!',
        },
        {
          id: '3',
          title: 'Bowling',
          votes: [],
          description:
            'Ähnlich zum Mini-Golf nur mit größeren Bällen und somit NOCH MEHR EHRGEIZ!!!',
        },
      ],
    },
  ];

  constructor() {
    this.eventList$.next(this.eventList);
  }

  getEvents(): Observable<Array<EventEntity>> {
    return this.eventList$;
  }

  getTotalUserVotesByEventId(
    eventId: string,
    userName: string
  ): ProposalEntity[] {
    // find macthing event
    const event = this.eventList.find((ev) => ev.id === eventId);
    // filter proposals by user name
    return event?.proposals.filter((proposal) =>
      proposal.votes.some((vote) => vote === userName)
    );
  }

  getSubmittedProposalsByUserName(
    eventId: string,
    proposalId: string,
    userName: string
  ): string[] {
    // find macthing event
    const event = this.eventList.find((ev) => ev.id === eventId);
    // find proposals by id
    const proposal = event?.proposals.find(
      (proposal) => proposal.id === proposalId
    );
    // find vote by user name
    const votes = proposal.votes.filter((vote) => vote === userName);
    return votes;
  }

  voteForProposal(eventId: string, proposalId: string, userName: string): void {
    this.eventList
      .find((event) => event.id === eventId)
      .proposals.find((proposal) => proposal.id === proposalId)
      .votes.push(userName);
    this.eventList$.next(this.eventList);
  }
}
