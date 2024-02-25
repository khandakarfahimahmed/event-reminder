import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddNewEventComponent } from './components/add-new-event/add-new-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDatePipe } from './custom-date/custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddNewEventComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
