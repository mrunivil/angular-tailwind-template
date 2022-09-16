import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsComponent,
      },
    ]),
  ],
  declarations: [EventsComponent],
})
export class EventsModule {}
