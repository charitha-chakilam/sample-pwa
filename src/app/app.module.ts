import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { getDataService } from '../service';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ])
  ],
  providers: [getDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }



