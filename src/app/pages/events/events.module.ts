import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    TableModule,
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
