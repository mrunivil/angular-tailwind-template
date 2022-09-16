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
            'Eine gemütliche Runde Minigolf steigert den Ehrgeiz. Denn verlieren ist keine Option! ;-)',
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
            'Ähnlich zum Mini-Golf nur mit größeren Bällen und somit NOCH MEHR EHRGEIZ xD',
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

  getSubmittedProposalsByUserName(
    eventId: string,
    userName: string
  ): ProposalEntity[] {
    // find macthing event
    const event = this.eventList.find((ev) => ev.id === eventId);
    // filter proposals by user name
    return event?.proposals.filter((proposal) =>
      proposal.votes.filter((vote) => vote === userName)
    );
  }
}
