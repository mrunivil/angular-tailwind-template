import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuardModule } from './guards/auth-guard.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AuthGuardModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./pages/events/events.module').then((m) => m.EventsModule),
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
